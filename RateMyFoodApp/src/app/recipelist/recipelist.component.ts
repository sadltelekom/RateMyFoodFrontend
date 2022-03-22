import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ReciperestservService } from '../rest/reciperestserv.service';
import { Dbrecipe } from '../shared/dbrecipe';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  recipes: Dbrecipe[] = [];

  constructor(private reciperestservive: ReciperestservService, private router: Router, private activeRoute: ActivatedRoute) {
    if (!this.activeRoute.snapshot.paramMap.get('search')) {
      this.reciperestservive.getAllRecipes().subscribe(recipe => this.recipes = recipe);
    } else {
      this.reciperestservive.getRecipeByName(this.activeRoute.snapshot.paramMap.get('search')!).subscribe(recipe => this.recipes = recipe)
    }
    this.router.events
      .pipe(
        filter(value => value instanceof NavigationEnd),
      )
      .subscribe(event => {
        if (!this.activeRoute.snapshot.paramMap.get('search')) {
          this.reciperestservive.getAllRecipes().subscribe(recipe => this.recipes = recipe);
        } else {
          this.reciperestservive.getRecipeByName(this.activeRoute.snapshot.paramMap.get('search')!).subscribe(recipe => this.recipes = recipe)
        }
      });
  }



  ngOnInit(): void {
  }

  openRecipe(id: number) {
    this.router.navigate(['recipes', id]);
  }


}
