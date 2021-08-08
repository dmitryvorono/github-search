import { GithubRepository } from './../../core/interfaces/github-repository';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs/operators';
import { AppState } from 'src/app/core/store';
import { selectFetching, selectRepositories } from 'src/app/core/store/search';
import { CardComponentProps } from 'src/app/ui/interfaces/card-component-props';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-repositories',
  templateUrl: './github-repositories.component.html',
  styleUrls: ['./github-repositories.component.scss'],
})
export class GithubRepositoriesComponent implements OnInit {
  repositories$: Observable<CardComponentProps[]> = this.store
    .select(selectRepositories)
    .pipe(
      filter<GithubRepository[] | null, GithubRepository[]>(
        (
          repositories: GithubRepository[] | null
        ): repositories is GithubRepository[] => repositories !== null
      ),
      map((repositories: GithubRepository[]) =>
        repositories.map((repo) => ({
          id: repo.id,
          title: repo.name,
          content: repo.description,
          avatar: repo.owner.avatar_url,
        }))
      )
    );

  fetching$ = this.store.select(selectFetching);

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {}

  onClickToCard = (id$: Observable<number>) =>
    id$.pipe(
      tap((id) => {
        this.router.navigate(['/', 'repository', id]);
      })
    );
}
