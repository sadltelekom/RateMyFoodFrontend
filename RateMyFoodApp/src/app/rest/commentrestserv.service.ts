import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dbcomment } from '../shared/dbcomment';

@Injectable({
  providedIn: 'root'
})
export class CommentrestservService {
  private apiUrl: string = "http://localhost:8080/get/comments/recipe/";

  constructor(private http: HttpClient) { 

  }

  getCommentsforRecipe(id: number) {
    let apiUrlNew = this.apiUrl+ id;
    return this.http.get<Dbcomment[]>(apiUrlNew);
  }
  addComment(id: number) {

  }
}
