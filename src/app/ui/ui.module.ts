import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
  ],
  exports: [
    SearchComponent,
  ],
})
export class UiModule { }
