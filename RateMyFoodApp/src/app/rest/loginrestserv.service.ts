import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dbuser } from '../shared/dbuser';

@Injectable({
  providedIn: 'root'
})
export class LoginrestservService {
  private apiUrl: string = "http://localhost:8080/get/user/allusers/";

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Dbuser[]>(this.apiUrl);
  }

}
