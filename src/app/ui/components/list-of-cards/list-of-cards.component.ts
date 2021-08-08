import { CardComponentProps } from './../../interfaces/card-component-props';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-of-cards',
  templateUrl: './list-of-cards.component.html',
  styleUrls: ['./list-of-cards.component.scss'],
})
export class ListOfCardsComponent implements OnInit {
  @Input() dataCards?: CardComponentProps[] | null;
  @Input() onClickfn?: (id$: Observable<number>) => Observable<any>;

  constructor() {}

  ngOnInit(): void {}

}
