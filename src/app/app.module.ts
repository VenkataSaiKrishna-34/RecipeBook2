import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { InternalPageComponent } from './main-page/internal-page/internal-page.component';
import { Internal12Component } from './main-page/internal12/internal12.component';
import { Internal13Component } from './main-page/internal13/internal13.component';
import { Internal14Component } from './main-page/internal14/internal14.component';
import { Internal15Component } from './main-page/internal15/internal15.component';
import { Internal21Component } from './main-page/internal21/internal21.component';
import { Internal22Component } from './main-page/internal22/internal22.component';
import { Internal23Component } from './main-page/internal23/internal23.component';
import { Internal24Component } from './main-page/internal24/internal24.component';
import { Internal25Component } from './main-page/internal25/internal25.component';
import { RecipeService } from './recipes/recipe.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    MainPageComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    InternalPageComponent,
    Internal12Component,
    Internal13Component,
    Internal14Component,
    Internal15Component,
    Internal21Component,
    Internal22Component,
    Internal23Component,
    Internal24Component,
    Internal25Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
