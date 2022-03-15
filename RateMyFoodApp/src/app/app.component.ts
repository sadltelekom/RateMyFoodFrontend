import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate my food app';
  searchterm = "";
  
  searchRecipes(term: string) {
    console.log("search clicked");
    console.log(term);
    this.searchterm = this.searchterm;
  }
}
