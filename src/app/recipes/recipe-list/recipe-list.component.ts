import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A new test Recipe', 'this is simply test nothing much so dont expect.', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('A new test Recipe number 2', 'this is simloy test nothing much so dont expect.', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }
    onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)

  }

}
