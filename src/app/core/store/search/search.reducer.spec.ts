import { initialSearchState, SearchState } from './search.state';
import { toggleFetching, searchRepositoriesSuccess } from './search.actions';
import { reducer } from './search.reducer';

describe('Search Reducer', () => {
  let state;
  describe('when the action is toggleFetching', () => {
    it('should toggle the fetching prop', () => {
      const action = toggleFetching();
      state = reducer(initialSearchState, action);
      expect(state.fetching).toEqual(true);
      state = reducer(state, action);
      expect(state.fetching).toEqual(false);
    });
  });

  describe('when the action is searchRepositoriesSuccess', () => {
    it('should set the result prop', () => {
      const action = searchRepositoriesSuccess({
        payload: {
          result: ['ololo', 'lalatoto'],
        },
      });
      state = reducer(initialSearchState, action);
      expect(state.result?.length).toEqual(2);
    });
  });

});
