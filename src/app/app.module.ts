import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostItemComponent } from './pages/post-item/post-item.component';
import { AboutComponent } from './pages/about/about.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

const appRouters: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostItemComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  //  redirectTo: '/'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    PostsComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
