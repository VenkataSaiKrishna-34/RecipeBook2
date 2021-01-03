import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
// import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    // recipeSelected = new Subject<Recipe>();
    
//    private recipes: Recipe[] = [
//         new Recipe('A Test Recipe', 
//         'This is simply a test', 
//         'https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg?webp=true&quality=90&crop=9px%2C2330px%2C5697px%2C2451px&resize=940%2C399',
//         [
//             new Ingredient('Meat', 1),
//             new Ingredient('French Fries', 20)
//         ]),
//         new Recipe('Another Test Recipe', 
//         'This is simply a test', 
//         'https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg?webp=true&quality=90&crop=9px%2C2330px%2C5697px%2C2451px&resize=940%2C399',
//         [
//             new Ingredient('Buns', 2),
//             new Ingredient('Meat', 1)
//         ])
//       ];

private recipes: Recipe[] = [];

      constructor(private slService: ShoppingListService){}

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes.slice()[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
            this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }
}