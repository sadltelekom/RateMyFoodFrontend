import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dbingredient } from '../shared/dbingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientrestservService {
  private apiUrl: string = "http://localhost:8080/get/ingredients/recipe/";

  constructor(private http: HttpClient) { }

  getIngredientsByRecipeId(id: number) {
    let apiUrlNew = this.apiUrl + id;
    return this.http.get<Dbingredient[]>(apiUrlNew);
  }

  getAllIngredients() {
    let apiUrlNew = "http://localhost:8080/get/ingredients/";
    return this.http.get<Dbingredient[]>(apiUrlNew);
  }

}
