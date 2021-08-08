import { GithubRepository } from './../../core/interfaces/github-repository';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { AppState } from 'src/app/core/store';
import { selectRepositories } from 'src/app/core/store/search';
import { CardComponentProps } from 'src/app/ui/interfaces/card-component-props';
import { Observable } from 'rxjs';

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
          title: repo.name,
          description: repo.description,
          avatar: repo.owner.avatar_url,
        }))
      )
    );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
