import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from './serv/loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate my food app';
  username :string  = "";
  
  constructor(private router: Router) {}
  searchRecipes(term: string) {

    if(term !== "") {
      console.log(term);
      this.router.navigate(['recipes/search',term]);
    }
    (<HTMLInputElement>document.getElementById("search_bar")).value="";
  
  }
  
  dancingfeet() {}
}
