import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UserRoutingModule} from './user-routing.module';
import {UserComponent, UserDetailsComponent, UsersComponent} from './components';
import {UserResolveService, UserService} from "./services";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UserService,UserResolveService]
})
export class UserModule { }
