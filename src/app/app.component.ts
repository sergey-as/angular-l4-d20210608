import {Component} from '@angular/core';
import {DataTransferService} from "./app-services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-l4-d20210608';

  constructor() {
  // constructor(private dataTransferService: DataTransferService) {
    // console.log(this.dataTransferService.store.getValue());
    // this.dataTransferService.store.next([1, 2, 3]);
    // console.log(this.dataTransferService.store.getValue());
  }
}
