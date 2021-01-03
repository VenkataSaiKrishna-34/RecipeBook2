import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { InternalPageComponent } from './main-page/internal-page/internal-page.component';
import { Internal12Component } from './main-page/internal12/internal12.component';
import { Internal13Component } from './main-page/internal13/internal13.component';
import { Internal14Component } from './main-page/internal14/internal14.component';
import { Internal15Component } from './main-page/internal15/internal15.component';
import { Internal25Component } from './main-page/internal25/internal25.component';
import { Internal24Component } from './main-page/internal24/internal24.component';
import { Internal23Component } from './main-page/internal23/internal23.component';
import { Internal22Component } from './main-page/internal22/internal22.component';
import { Internal21Component } from './main-page/internal21/internal21.component';


const appRoutes: Routes = [
  {path: '', redirectTo:'/recipes', pathMatch: 'full'},
  {path: 'recipes', component: MainPageComponent},
  {path: 'recipes/mathi-mulakitathu', component: InternalPageComponent},
  {path: 'recipes/fish-pickle', component: Internal12Component},
  {path: 'recipes/fish-chilly', component: Internal13Component},
  {path: 'recipes/easy-fish-fry', component: Internal14Component},
  {path: 'recipes/paneer-popcorn', component: Internal15Component},
  {path: 'recipes/vegeterian-kids-lunchbox', component: Internal21Component},
  {path: 'recipes/everest-chole-masala', component: Internal22Component},
  {path: 'recipes/rajastani-shahi-gatta-pulao', component: Internal23Component},
  {path: 'recipes/smokey-rice-maheri', component: Internal24Component},
  {path: 'recipes/grilled-chicken-withrice', component: Internal25Component},
  {path: 'recipe-list', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
