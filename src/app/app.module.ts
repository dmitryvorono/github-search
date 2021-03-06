import { UiModule } from './ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appEffects, appReducers } from './core/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GithubSearchComponent } from './components/github-search/github-search.component';
import { GithubRepositoriesComponent } from './components/github-repositories/github-repositories.component';
import { GithubRepoDetailComponent } from './components/github-repo-detail/github-repo-detail.component';
import { GithubRepoListComponent } from './components/github-repo-list/github-repo-list.component';

@NgModule({
  declarations: [AppComponent, GithubSearchComponent, GithubRepositoriesComponent, GithubRepoDetailComponent, GithubRepoListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
    BrowserAnimationsModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
