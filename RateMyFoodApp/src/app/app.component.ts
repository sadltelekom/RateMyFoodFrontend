import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from './serv/loginservice.service';
import { User } from '../app/shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate my food app';
  username: string = "";

  constructor(private router: Router, private login: LoginserviceService) {
    if (sessionStorage.getItem("username")) {
      let newUser: User = {
        username: sessionStorage.getItem("username")!,
        password: sessionStorage.getItem("password")!
      };

      login.setUser(newUser);
    }
  }

  searchRecipes(term: string) {

    if (term !== "") {
      console.log(term);
      this.router.navigate(['recipes/search', term]);
    }
    (<HTMLInputElement>document.getElementById("search_bar")).value = "";

  }

  dancingfeet() { }
}
