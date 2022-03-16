import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dbrating } from '../shared/dbrating';

@Injectable({
  providedIn: 'root'
})
export class RatingrestservService {
  
  private apiUrl: string ="http://localhost:8080/get/ratings/recipeaverage/";
    
  constructor(private http: HttpClient) {}
  getAverageRatingforRecipe(id: number) {
    let apiUrlNew = this.apiUrl+ id;
    return this.http.get<Dbrating>(apiUrlNew);
  }
  
}
