import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryrestservService } from '../rest/categoryrestserv.service';
import { IngredientrestservService } from '../rest/ingredientrestserv.service';
import { Dbcategory } from '../shared/dbcategory';
import { Dbingredient } from '../shared/dbingredients';
import { Ingredient } from '../shared/ingredient';
import { Recipedetails } from '../shared/recipedetails';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {
  categories: Dbcategory[] = [];
  ingredients: Dbingredient[] = [];
  ingredientsused: Ingredient[] = [];
  amount: string = "";
  ingredientname: string = "";
  ingredientid: number = 0;

  formRecipe: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    time: new FormControl(1, Validators.required),
    howto: new FormControl('', Validators.required),
    category: new FormControl(''),
    ingredient: new FormControl(''),
    amountused: new FormControl(''),
  });

  constructor(private categoryrestserv: CategoryrestservService, private ingredientrestserv: IngredientrestservService, private http: HttpClient,private router: Router) {
    this.categoryrestserv.getAllCategorys().subscribe(category => this.categories = category);
    this.ingredientrestserv.getAllIngredients().subscribe(ingredient => this.ingredients = ingredient);
  }

  ngOnInit(): void {
  }

  insertRecipe() {
    let newRecipe : Recipedetails = {
      ingredients : this.ingredientsused,
      name: this.formRecipe.get('name')?.value,
      time: this.formRecipe.get('time')?.value,
      howto: this.formRecipe.get('howto')?.value,
      category: this.formRecipe.get('category')?.value
    };
    console.log(JSON.parse(JSON.stringify(newRecipe))); 
    let headers  = new HttpHeaders({'Content-Type': 'application/json'});
    
    this.http.post("http://localhost:8080/post/recipes/",JSON.parse(JSON.stringify(newRecipe)),{headers}).subscribe();
    this.router.navigate(['recipes']);

  }

  addIngredientToList() {   
    let newIngredient: Dbingredient = this.formRecipe.get('ingredient')?.value;
    newIngredient.amount = this.formRecipe.get('amountused')?.value;
    let newStringIngredient: Ingredient = {
      id : newIngredient.id.toString(),
      name: newIngredient.name,
      amount: newIngredient.amount

    }

    this.ingredientsused.push(newStringIngredient);
  }
}
