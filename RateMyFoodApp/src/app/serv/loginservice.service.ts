import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginrestservService } from '../rest/loginrestserv.service';
import { Dbuser } from '../shared/dbuser';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private user!: User;
  
  private dbusers: Dbuser[] = [];
    
  
  constructor(private loginrest : LoginrestservService) {
    this.loginrest.getUsers().subscribe(dbuser => this.dbusers = dbuser);
      if(!sessionStorage.getItem("username")) {
        this.user = ({ username: "Guest", password: "VerySecurePassword" });
      }
      if(sessionStorage.getItem("username")) {
        this.user = ({ username: sessionStorage.getItem("username")!, password: sessionStorage.getItem("password")!});
      }
  }

  getUsername(): string {
    return this.user.username;
  }
  getPassword(): string {
    return this.user.password! ;
  }
  setUser(user: User) {
    for ( let dbuser of this.dbusers) {
      if( dbuser.name === user.username && dbuser.password === user.password) {
        this.user = user;
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('password', user.password);
      }
      else {
        console.log(dbuser.name);
        console.log(dbuser.password);
      }
    }
       
  }

}
