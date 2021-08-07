import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { testResultWrapper } from 'src/test-tools/test-result-wrapper';
import { GithubService } from '../../services/github-service/github.service';
import {
  searchRepositories,
  searchRepositoriesSuccess,
} from './search.actions';
import { SearchEffects } from './search.effects';

describe('Search effects', () => {
  let actions$ = new Observable<Action>();
  let testScheduler: TestScheduler;
  let effects: SearchEffects;

  let gitHubServiceStub: Partial<GithubService>;
  let gitHubService: GithubService;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  beforeEach(() => {
    gitHubServiceStub = {
      fetchRepositories: jasmine
        .createSpy()
        .and.returnValue(of(testResultWrapper)),
    };
    TestBed.configureTestingModule({
      providers: [
        SearchEffects,
        provideMockActions(() => actions$),
        {
          provide: GithubService,
          useValue: gitHubServiceStub,
        },
      ],
    });
    effects = TestBed.inject(SearchEffects);
    gitHubService = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should have the gitHub service', () => {
    expect(effects['gitHubService']).toBeTruthy();
  });

  it('should have the actions prop', () => {
    expect(effects['actions$']).toBeTruthy();
  });

  describe('fetchRepositories', () => {
    it('should fetch repositories by term with git-hub service', () => {
      testScheduler.run(({ cold, hot, expectObservable }) => {
        actions$ = hot('--a--', {
          a: searchRepositories({
            payload: {
              term: 'ololo',
            },
          }),
        });
        gitHubService.fetchRepositories = jasmine
          .createSpy()
          .and.returnValue(cold('--(a|)', { a: testResultWrapper.items }));
        expectObservable(effects.fetchRepositories$).toBe('----a--', {
          a: searchRepositoriesSuccess({
            payload: {
              result: testResultWrapper.items,
            },
          }),
        });
      });
    });
  });
});
