import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentrestservService } from '../rest/commentrestserv.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  private id: number = 0;
  private userId: number = 1;


  constructor(private router: Router, private activeRoute: ActivatedRoute, private commentrestservice: CommentrestservService) {
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

  addComment(comment: string) {
    if (comment !== '') {
      this.commentrestservice.addComment(this.id,comment,this.userId);
      this.router.navigate(['recipes', this.id]);
    }
  }
}
