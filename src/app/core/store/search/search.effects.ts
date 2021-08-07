import { GithubService } from './../../services/github-service/github.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SearchActionsEnum, searchRepositoriesSuccess } from './search.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class SearchEffects {
  constructor(
    private gitHubService: GithubService,
    private actions$: Actions
  ) {}

  fetchRepositories$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: string; payload: { term: string } }>(
        SearchActionsEnum.SearchRepositories
      ),
      switchMap((action) =>
        this.gitHubService.fetchRepositories(action.payload.term)
      ),
      map((result) => searchRepositoriesSuccess({ payload: { result } }))
    )
  );
}
