import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dbcategory } from '../shared/dbcategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryrestservService {
  private apiUrl: string = "http://localhost:8080/get/recipes/category/";

  constructor(private http: HttpClient) { }

  getCategoryforRecipe(id: number) {
    let apiUrlNew = this.apiUrl+ id;
    return this.http.get<Dbcategory>(apiUrlNew);
  }
}
