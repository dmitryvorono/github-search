export interface SearchState {
  search: string;
  fetching: boolean;
  result: unknown[] | null;
}

export const initialSearchState: SearchState = {
  search: '',
  fetching: false,
  result: null,
}
