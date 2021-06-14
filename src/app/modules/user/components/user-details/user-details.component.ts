import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../../models";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: User;

  constructor(
    // private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {

    // this.activatedRoute.params.subscribe(params => {
    //   let id = params.id;
    //   console.log(id);
    //   this.userService.getUser(id).subscribe(user => this.userDetails = user);
    // })

    this.activatedRoute.data.subscribe((data) => this.userDetails = data.user);
  }

  ngOnInit(): void {
  }

}
