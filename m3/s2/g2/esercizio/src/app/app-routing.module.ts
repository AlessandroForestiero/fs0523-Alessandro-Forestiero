import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: ActivePostsComponent,
  },
  {
    path: 'active-posts',
    component: ActivePostsComponent,
  },
  {
    path: 'inactive-posts',
    component: InactivePostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
