import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {User} from "../../../models";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User> {

  constructor(private userService: UserService) {
  }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): Observable<User> | Promise<User> | User | any {
    const userId = activatedRouteSnapshot.params.id;
    // console.log(userId);
    // console.log(routerStateSnapshot);
    return this.userService.getUser(userId);
  }
}
