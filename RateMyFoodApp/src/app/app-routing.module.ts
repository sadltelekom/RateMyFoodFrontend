import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { CommentComponent } from './comment/comment.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipesComponent } from './recipes/recipes.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  { path: '' , component : HomeComponent },
  { path: 'recipes' , component : RecipelistComponent},
  { path: 'recipes/search/:search' , component : RecipelistComponent},
  { path: 'comments/:id' , component : CommentComponent},
  { path: 'recipes/:id' , component : RecipesComponent},
  { path: 'login' , component : LoginComponent },
  { path: 'upload/:id' , component : FileuploadComponent},
  { path: 'addrecipe' , component : AddrecipeComponent},
  { path: "**", component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
