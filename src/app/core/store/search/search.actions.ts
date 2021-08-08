import { createAction, props } from '@ngrx/store';
import { GithubRepository } from '../../interfaces/github-repository';

export enum SearchActionsEnum {
  SearchRepositories = '[Search] SEARCH_REPOSITORIES_STARTED',
  SearchRepositoriesSuccess = '[Search] SEARCH_REPOSITORIES_SUCCESS',
  ToggleFetching = '[Search] ToggleFetching',
}

export const searchRepositories = createAction(
  SearchActionsEnum.SearchRepositories,
  props<{ payload: { term: string } }>()
);

export const searchRepositoriesSuccess = createAction(
  SearchActionsEnum.SearchRepositoriesSuccess,
  props<{ payload: { result: GithubRepository[] } }>()
);

export const toggleFetching = createAction(SearchActionsEnum.ToggleFetching);
