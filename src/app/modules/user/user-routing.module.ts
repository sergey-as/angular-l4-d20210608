import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserDetailsComponent, UsersComponent} from "./components";
import {UserResolveService} from "./user-services";

const routes: Routes = [{
  path: '', component: UsersComponent,
  children: [
    {path: ':id', component: UserDetailsComponent, resolve: {user: UserResolveService}}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
