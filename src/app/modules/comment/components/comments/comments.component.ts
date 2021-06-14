import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataTransferService} from "../../../../app-services";
import {Comment} from "../../../../models";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];

  chosenComment: Comment;

  constructor(
    private httpClient: HttpClient,
    private dataTransferService: DataTransferService
  ) {
    // console.log(this.dataTransferService.store.getValue());
    console.log(this.dataTransferService.getState());
  }

  ngOnInit(): void {
    let url = 'https://jsonplaceholder.typicode.com/comments';
    this.httpClient.get<Comment[]>(url).subscribe((response) => this.comments = response);
  }

  xxx(z: Comment) {
    // console.log(z);
    this.chosenComment = z;
  }
}
