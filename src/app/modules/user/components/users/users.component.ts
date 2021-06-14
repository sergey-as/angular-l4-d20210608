import {Component, OnInit} from '@angular/core';

import {UserService} from "../../user-services";
import {User} from "../../../../models";
import {DataTransferService} from "../../../../app-services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private dataTransferService: DataTransferService) {
    // console.log(this.dataTransferService.store.getValue());

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => this.users = response);
  }

}
