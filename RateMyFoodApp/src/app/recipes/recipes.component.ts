import { Component, OnInit } from '@angular/core';
import { CommentrestservService } from '../rest/commentrestserv.service';
import { RatingrestservService } from '../rest/ratingrestserv.service';
import { ReciperestservService } from '../rest/reciperestserv.service';
import { LoginserviceService } from '../serv/loginservice.service';
import { Dbcomment } from '../shared/dbcomment';
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
  pictureurl: string = "http://localhost:8080/recipes/images/pic_5_1647419725844.png";
  recipe: string = "";
  time: number = 0;

  course: string = "Dinner";
  category: string = "Soup";
  rating: number = 0;
  comments: Dbcomment[] = [];
  username: string = "";

  recipeObject: Dbrecipe[] = [];

  constructor(private commentrestservice: CommentrestservService,
    private loginservice: LoginserviceService, private ratingrestservice: RatingrestservService, private reciperestservive: ReciperestservService) {
    this.commentrestservice.getCommentsforRecipe(this.id).subscribe(comment => this.comments = comment);
    this.username = this.loginservice.getUsername();
    this.ratingrestservice.getAverageRatingforRecipe(this.id).subscribe(avgrating => this.rating = avgrating.average )
    this.reciperestservive.getRecipeById(this.id).subscribe(recipe =>  {

      this.recipeObject = recipe;
      this.name =  this.recipeObject[0].name;
      this.recipe = this.recipeObject[0].howto;
      this.time = this.recipeObject[0].time;
   
    }) 
  }

  ngOnInit(): void {
  }

  addComment() {

  }


}
