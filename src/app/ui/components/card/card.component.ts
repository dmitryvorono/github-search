import { CardComponentProps } from './../../interfaces/card-component-props';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() props?: CardComponentProps;

  constructor() { }

  ngOnInit(): void {
  }

}
