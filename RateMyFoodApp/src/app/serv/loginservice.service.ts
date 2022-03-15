import { Injectable } from '@angular/core';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private user : User = ({ username: "Guest",password:"VerySecurePassword"});
  
  constructor() { 
    
  }

  getUsername(): string {
    return this.user.username;
  }
  getPassword(): string {
    return this.user.password;
  }
  setUser(user : User) {
    // TODO: check if correct via rest service

    this.user = user;
  } 
  
}
