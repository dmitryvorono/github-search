import { ActionReducerMap } from '@ngrx/store';
import { SearchState, initialSearchState } from './search/search.state';
import * as SearchReducer from './search';

export interface AppState {
  search: SearchState,
}

export const initialState: AppState = {
  search: initialSearchState,
}

export function getInitialState(): AppState {
  return initialState;
}

export const appReducers: ActionReducerMap<AppState, any> = {
  search: SearchReducer.reducer,
};

export const appEffects = [
  SearchReducer.SearchEffects,
];
