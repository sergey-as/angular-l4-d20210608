import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../models";
import {DataTransferService} from "../../../../app-services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
  }

  storeUser() {
    // const currentStore = this.dataTransferService.store.getValue();
    const currentStore = this.dataTransferService.getState();
    currentStore.push(this.user);
    // this.dataTransferService.store.next(currentStore);
    this.dataTransferService.setState(currentStore);

  }
}
