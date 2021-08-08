import { environment } from 'src/environments/environment';
import { TestBed, tick } from '@angular/core/testing';

import { GithubService } from './github.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { testResultWrapper } from 'src/test-tools/test-result-wrapper';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a http client', () => {
    expect(service['http']).toBeTruthy();
  });

  describe('fetchRepositories', () => {
    let spy: any;
    beforeEach(() => {
      spy = spyOn(service['http'], 'get').and.returnValue(of(testResultWrapper));
    });
    it('should make a get request', () => {
      service.fetchRepositories('ololo');
      expect(spy).toHaveBeenCalledWith(environment.api.repositories, {
        params: { q: 'ololo' },
      });
    });

    it('should peel the result-wrapper', (done) => {
      service.fetchRepositories('ololo').subscribe((result) => {
        expect(result).toEqual(testResultWrapper.items);
        done();
      });
    });

  });
});
