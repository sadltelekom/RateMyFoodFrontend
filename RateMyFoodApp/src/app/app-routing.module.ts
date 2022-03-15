import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecipesComponent } from './recipes/recipes.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  { path: '' , component : HomeComponent },
  { path: 'recipes' , component : RecipesComponent },
  { path: 'login' , component : LoginComponent },
  { path: 'upload' , component : FileuploadComponent},
  { path: "**", component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
