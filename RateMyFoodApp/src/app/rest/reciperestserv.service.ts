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
    let apiUrlNew = this.apiUrl + id;
    return this.http.get<Dbrecipe[]>(apiUrlNew);
  }

  getAllRecipes() {
    return this.http.get<Dbrecipe[]>("http://localhost:8080/get/recipes/all/");
  }

  getRecipeByName(name: string) {
    let apiUrlNew = "http://localhost:8080/get/recipes/search/" + name;
    return this.http.get<Dbrecipe[]>(apiUrlNew);
  }
}
