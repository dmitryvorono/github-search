import { toggleFetching, searchRepositoriesSuccess } from './search.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { SearchState, initialSearchState } from './search.state';

const searchReducer = createReducer(
  initialSearchState,
  on(toggleFetching, (state: SearchState, { payload: { fetching } }) => ({
    ...state,
    fetching,
  })),
  on(
    searchRepositoriesSuccess,
    (state: SearchState, { payload: { result } }) => ({ ...state, result })
  )
);

export function reducer(
  state: SearchState | undefined,
  action: Action
): SearchState {
  return searchReducer(state, action);
}
