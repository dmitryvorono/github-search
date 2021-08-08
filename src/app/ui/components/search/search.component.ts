import { Observable, Subject, Subscription } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  takeUntil,
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() set search(value: (term$: Observable<string>) => Observable<any>) {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
    this.searchHandler$ = this.handleSearch(this.term$, value);
    this.searchSubscription = this.searchHandler$.subscribe();
  }

  term$ = new Subject();

  private searchHandler$?: Observable<any>;
  private searchSubscription: Subscription | null = null;
  private destroy$ = new Subject();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  private handleSearch(
    term$: Observable<any>,
    searchFn: (term$: Observable<string>) => Observable<any>
  ): Observable<any> {
    return term$.pipe(
      map<any, string>((event) => event.target.value),
      debounceTime(200),
      distinctUntilChanged(),
      searchFn,
      takeUntil(this.destroy$)
    );
  }
}
