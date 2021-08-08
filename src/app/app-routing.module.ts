import { GithubRepoListComponent } from './components/github-repo-list/github-repo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubRepoDetailComponent } from './components/github-repo-detail/github-repo-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'repository',
    pathMatch: 'full',
  },
  {
    path: 'repository',
    component: GithubRepoListComponent,
  },
  {
    path: 'repository/:id',
    component: GithubRepoDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
