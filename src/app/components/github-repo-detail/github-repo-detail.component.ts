import { pluck, switchMap, switchMapTo } from 'rxjs/operators';
import { findRepository } from './../../core/store/search/search.selectors';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store';

@Component({
  selector: 'app-github-repo-detail',
  templateUrl: './github-repo-detail.component.html',
  styleUrls: ['./github-repo-detail.component.scss'],
})
export class GithubRepoDetailComponent implements OnInit {
  repository$ = this.activatedRoute.params.pipe(
    pluck('id'),
    switchMap((id: string) => this.store.select(findRepository, { id: +id }))
  );

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
