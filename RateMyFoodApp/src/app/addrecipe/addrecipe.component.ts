import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryrestservService } from '../rest/categoryrestserv.service';
import { IngredientrestservService } from '../rest/ingredientrestserv.service';
import { Dbcategory } from '../shared/dbcategory';
import { Dbingredient } from '../shared/dbingredients';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {
  categories: Dbcategory[] = [];
  ingredients: Dbingredient[] = [];
  ingredientsused: Dbingredient[] = [];
  amount: string = "";
  ingredientname: string = "";
  ingredientid: number = 0;

  // two-way data binding
  formRecipe: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3)]),
    time: new FormControl(1, Validators.required),
    howto: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    category: new FormControl(''),
    ingredient: new FormControl(''),
    amountused: new FormControl(''),
  });

  constructor(private categoryrestserv: CategoryrestservService, private ingredientrestserv: IngredientrestservService) {
    this.categoryrestserv.getAllCategorys().subscribe(category => this.categories = category);
    this.ingredientrestserv.getAllIngredients().subscribe(ingredient => this.ingredients = ingredient);
  }

  ngOnInit(): void {
  }

  insertRecipe() {
    console.log(this.formRecipe.value)
  }

  addIngredientToList() {
    // console.log("click");
    // console.log(this.formRecipe.get('ingredient')?.value);
    // console.log(this.formRecipe.get('amountused')?.value);
    let newIngredient: Dbingredient = this.formRecipe.get('ingredient')?.value;
    newIngredient.amount = this.formRecipe.get('amountused')?.value;
    this.ingredientsused.push(newIngredient);
  }
}
