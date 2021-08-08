import { LoadingDirective } from './directives/loading/loading.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { ListOfCardsComponent } from './components/list-of-cards/list-of-cards.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    SearchComponent,
    CardComponent,
    ListOfCardsComponent,
    LoadingComponent,
    LoadingDirective,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    SearchComponent,
    CardComponent,
    ListOfCardsComponent,
    LoadingDirective,
    LoadingComponent,
  ],
})
export class UiModule {}
