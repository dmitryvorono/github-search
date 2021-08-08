import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { ListOfCardsComponent } from './components/list-of-cards/list-of-cards.component';

@NgModule({
  declarations: [SearchComponent, CardComponent, ListOfCardsComponent],
  imports: [CommonModule, MatInputModule, MatCardModule],
  exports: [SearchComponent, CardComponent, ListOfCardsComponent],
})
export class UiModule {}
