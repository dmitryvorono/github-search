import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SearchComponent, CardComponent],
  imports: [CommonModule, MatInputModule, MatCardModule],
  exports: [SearchComponent, CardComponent],
})
export class UiModule {}
