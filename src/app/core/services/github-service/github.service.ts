import { GitHubResultWrapper } from '../../interfaces/git-hub-result-wrapper';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  fetchRepositories(term: string): Observable<unknown[]> {
    return this.http
      .get<GitHubResultWrapper>(environment.api.repositories, {
        params: { q: term },
      })
      .pipe(
        pluck('items'),
      );
  }
}
