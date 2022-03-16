import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dbrecipe } from '../shared/dbrecipe';

@Injectable({
  providedIn: 'root'
})
export class ReciperestservService {
  private apiUrl: string = "http://localhost:8080/get/recipes/id/";
  constructor(private http: HttpClient) { }

  getRecipeById(id: number) {
    return this.http.get<Dbrecipe[]>(this.apiUrl + id);
  }
}
