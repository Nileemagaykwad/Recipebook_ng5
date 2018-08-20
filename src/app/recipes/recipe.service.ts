import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredients.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A new test Recipe',
      'this is simply test nothing much so dont expect.',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('bread', 5),
        new Ingredient('tomato', 3)
      ]),
    new Recipe('A new test Recipe number 2',
      'this is simloy test nothing much so dont expect.',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('brown bread', 5),
        new Ingredient('red tomato', 3)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes.slice()[index];
  }

  addIngredientstoShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
