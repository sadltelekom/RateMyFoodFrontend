import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoginserviceService } from './serv/loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate my food app';
  username :string  = "";
  
  searchRecipes(term: string) {
    console.log("search clicked");
    console.log(term);
    (<HTMLInputElement>document.getElementById("search_bar")).value="";
  
  }
}
