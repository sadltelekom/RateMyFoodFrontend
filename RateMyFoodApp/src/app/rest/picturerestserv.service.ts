import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dbpicture } from '../shared/dbpicture';

@Injectable({
  providedIn: 'root'
})
export class PicturerestservService {
  private apiUrl: string = "http://localhost:8080/get/pictures/recipe/";

  constructor(private http: HttpClient) { }

  getPicturesByRecipeId(id: number) {
    let apiUrlNew = this.apiUrl + id;
    return this.http.get<Dbpicture[]>(apiUrlNew);
  }
}

