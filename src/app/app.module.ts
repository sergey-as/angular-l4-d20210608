import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
      {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)},
      {path: 'comments', loadChildren: () => import('./modules/comment/comment.module').then(m => m.CommentModule)}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
