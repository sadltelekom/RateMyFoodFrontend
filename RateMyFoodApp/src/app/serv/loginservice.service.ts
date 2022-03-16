import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginrestservService } from '../rest/loginrestserv.service';
import { Dbuser } from '../shared/dbuser';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private user: User = ({ username: "Guest", password: "VerySecurePassword" });
  
  private dbusers: Dbuser[] = [];
    
  
  constructor(private loginrest : LoginrestservService) {
    this.loginrest.getUsers().subscribe(dbuser => this.dbusers = dbuser);
  }

  getUsername(): string {
    return this.user.username;
  }
  getPassword(): string {
    return this.user.password;
  }
  setUser(user: User) {
    for ( let dbuser of this.dbusers) {
      if( dbuser.name === user.username && dbuser.password === user.password) {
        this.user = user;
      }
      else {
        console.log(dbuser.name);
        console.log(dbuser.password);
      }
    }
       
  }

}
