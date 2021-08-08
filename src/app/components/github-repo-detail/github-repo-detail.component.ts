import { GithubRepository } from './../../core/interfaces/github-repository';
import { filter, map, pluck, switchMap } from 'rxjs/operators';
import { findRepository } from './../../core/store/search/search.selectors';
import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store';
import { CardComponentProps } from 'src/app/ui/interfaces/card-component-props';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-github-repo-detail',
  templateUrl: './github-repo-detail.component.html',
  styleUrls: ['./github-repo-detail.component.scss'],
})
export class GithubRepoDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('repoContent', { read: TemplateRef, static: false })
  repoContent?: TemplateRef<any>;

  repositoryCard$?: Observable<CardComponentProps>;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.repositoryCard$ = this.initializeRepositoryCard();
    }, 0);
  }

  private initializeRepositoryCard() {
    return this.activatedRoute.params.pipe(
      pluck('id'),
      switchMap((id: string) => this.store.select(findRepository, { id: +id })),
      filter(
        (
          repository: GithubRepository | undefined
        ): repository is GithubRepository => Boolean(repository)
      ),
      map((repo: GithubRepository) => ({
        id: repo.id,
        title: repo.name,
        content: this.repoContent || repo.description,
        avatar: repo.owner.avatar_url,
        html_url: repo.html_url,
        open_issues: repo.open_issues,
        description: repo.description,
      }))
    );
  }
}
