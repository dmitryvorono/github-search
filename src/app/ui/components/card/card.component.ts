import { CardComponentProps } from './../../interfaces/card-component-props';
import { Component, Input, OnDestroy, TemplateRef } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnDestroy {
  @Input() props!: CardComponentProps;
  @Input() set onClickfn(
    value: ((id$: Observable<number>) => Observable<any>) | undefined
  ) {
    if (!this.isValueFnGuard(value)) {
      return;
    }
    if (this.onClickSubscription) {
      this.onClickSubscription.unsubscribe();
    }
    this.onClickSubscription = this.click$
      .pipe(value, takeUntil(this.destroy$))
      .subscribe();
  }

  click$: Subject<number> = new Subject();

  private onClickSubscription?: Subscription;
  private destroy$ = new Subject();

  constructor() {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  ngOnInit(): void {}

  isTemplate(value: any): value is TemplateRef<any> {
    return value instanceof TemplateRef;
  }

  private isValueFnGuard(
    value: ((id$: Observable<number>) => Observable<any>) | undefined
  ): value is (id$: Observable<number>) => Observable<any> {
    return Boolean(value);
  }
}
