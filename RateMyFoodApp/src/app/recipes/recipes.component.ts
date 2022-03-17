import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryrestservService } from '../rest/categoryrestserv.service';
import { CommentrestservService } from '../rest/commentrestserv.service';
import { IngredientrestservService } from '../rest/ingredientrestserv.service';
import { PicturerestservService } from '../rest/picturerestserv.service';
import { RatingrestservService } from '../rest/ratingrestserv.service';
import { ReciperestservService } from '../rest/reciperestserv.service';
import { LoginserviceService } from '../serv/loginservice.service';
import { Dbcategory } from '../shared/dbcategory';
import { Dbcomment } from '../shared/dbcomment';
import { Dbingredient } from '../shared/dbingredients';
import { Dbrating } from '../shared/dbrating';
import { Dbrecipe } from '../shared/dbrecipe';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  id: number = 1;
  name: string = "";
  pictureurl: string[] = [];
  pictureindex: number = 0;
  // http://localhost:8080/recipes/images/  
  recipe: string = "";
  time: number = 0;

  course: string = "Dinner";
  category!: Dbcategory;
  categoryname: string = "";
  rating: number = 0;
  comments: Dbcomment[] = [];
  username: string = "";
  ingredients: Dbingredient[] = [];
  recipeObject: Dbrecipe[] = [];

  constructor(private commentrestservice: CommentrestservService,
    private loginservice: LoginserviceService,
    private ratingrestservice: RatingrestservService,
    private reciperestservive: ReciperestservService,
    private categoryrestservice: CategoryrestservService,
    private ingredientsrestservice: IngredientrestservService,
    private picturerestservice: PicturerestservService,
    private activeRoute: ActivatedRoute,
    private router: Router) {

    if (this.activeRoute.snapshot.paramMap.get('id')) {
      this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    }
    else {
      this.id = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    }
    this.commentrestservice.getCommentsforRecipe(this.id).subscribe(comment => this.comments = comment);
    this.username = this.loginservice.getUsername();
    this.ratingrestservice.getAverageRatingforRecipe(this.id).subscribe(avgrating => this.rating = avgrating.average);
    this.reciperestservive.getRecipeById(this.id).subscribe(recipe => {

      this.recipeObject = recipe;
      console.log(this.recipeObject);
      this.name = this.recipeObject[0].name;
      this.recipe = this.recipeObject[0].howto;
      this.time = this.recipeObject[0].time;

    });
    this.categoryrestservice.getCategoryforRecipe(this.id).subscribe(dbcategory => {
      this.category = dbcategory;
      this.categoryname = this.category.category;

    });
    this.ingredientsrestservice.getIngredientsByRecipeId(this.id).subscribe(ingredient => this.ingredients = ingredient);
    this.picturerestservice.getPicturesByRecipeId(this.id).subscribe(pictures => {
      for (let picture of pictures) {
        this.pictureurl.push("http://localhost:8080/recipes/images/" + picture.link);
      }
      if(this.pictureurl.length === 0) {
        this.pictureurl.push("../../assets/images/no-image.png");
      }
    });
   

  }

  ngOnInit(): void {
  }

  addPictureindex() {
    if(this.pictureurl.length === 1 || this.pictureurl.length === 0 ) {
      return;
    }
    if (this.pictureurl.length > this.pictureindex + 1) {
      this.pictureindex++;
    } else {
      this.pictureindex--;
    }
  }

  addRating(rating:number) {
    this.ratingrestservice.giveRating(this.id,rating,1);
    this.ratingrestservice.getAverageRatingforRecipe(this.id).subscribe(avgrating => this.rating = avgrating.average);
  }

  addComment() {
    this.router.navigate(['comments',this.id]);
  }
  addPicture() {
    this.router.navigate(['upload',this.id]);
  }

}
