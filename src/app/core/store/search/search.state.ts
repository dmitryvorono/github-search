import { GithubRepository } from "../../interfaces/github-repository";

export interface SearchState {
  search: string;
  fetching: boolean;
  result: GithubRepository[] | null;
}

export const initialSearchState: SearchState = {
  search: '',
  fetching: false,
  result: null,
}
