import { SearchState } from './search.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';

export const selectRepositories = createSelector(
  (state: AppState) => state.search,
  (state: SearchState) => state.result
);

export const selectFetching = createSelector(
  (state: AppState) => state.search,
  (state: SearchState) => state.fetching
);
