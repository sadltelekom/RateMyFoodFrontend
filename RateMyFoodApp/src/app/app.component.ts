import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from './serv/loginservice.service';
import { User } from '../app/shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate my food app';
  username: string = "Guest";
  condition: boolean = false;

  constructor(private router: Router, private login: LoginserviceService) {
    if (sessionStorage.getItem("username")) {
      let newUser: User = {
        username: sessionStorage.getItem("username")!,
        password: sessionStorage.getItem("password")!
      };

      this.login.setUser(newUser);
      this.username = this.login.getUsername();
    }
  }
  ngOnInit(): void {
    this.username = this.login.getUsername();
  }

  searchRecipes(term: string) {

    if (term !== "") {
      this.router.navigate(['recipes/search', term]);
    }
    (<HTMLInputElement>document.getElementById("search_bar")).value = "";

  }

  dancingfeet() {

    this.condition = !this.condition;

  }
}
