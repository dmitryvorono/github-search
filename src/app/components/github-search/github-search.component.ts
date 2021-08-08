import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { searchRepositories } from 'src/app/core/store/search';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss'],
})
export class GithubSearchComponent {
  search = (term$: Observable<string>) =>
    term$.pipe(
      tap((term) => {
        this.store.dispatch(searchRepositories({ payload: { term } }));
      })
    );

  constructor(private store: Store) {}
}
