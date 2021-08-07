import { GitHubResultWrapper } from './../../interfaces/git-hub-result-wrapper';
import { environment } from 'src/environments/environment';
import { TestBed, tick } from '@angular/core/testing';

import { GithubServiceService } from './github-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('GithubServiceService', () => {
  let service: GithubServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GithubServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a http client', () => {
    expect(service['http']).toBeTruthy();
  });

  describe('fetchRepositories', () => {
    const testResult: GitHubResultWrapper = {
      total_count: 3,
      incomplete_results: false,
      items: ['ololo', 'lalatoto', 'ububu'],
    };
    let spy: any;
    beforeEach(() => {
      spy = spyOn(service['http'], 'get').and.returnValue(of(testResult));
    });
    it('should make a get request', () => {
      service.fetchRepositories('ololo');
      expect(spy).toHaveBeenCalledWith(environment.api.repositories, {
        params: { q: 'ololo' },
      });
    });

    it('should peel the result-wrapper', (done) => {
      service.fetchRepositories('ololo').subscribe((result) => {
        expect(result).toEqual(testResult.items);
        done();
      });
    });

  });
});
