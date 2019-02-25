import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppinglistService } from 'src/app/shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Tikka Masala',
      'Indian Chicken Curry served with rice',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_760/https://storage.googleapis.com/gen-atmedia/3/2012/05/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf.jpeg',
      [new Ingredient('Tomato', 5), new Ingredient('Chicken', 5)]
    ),
    new Recipe(
      'Burger',
      'This is a test',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_760/https://storage.googleapis.com/gen-atmedia/3/2012/05/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf.jpeg',
      [new Ingredient('Bun', 1), new Ingredient('Patty', 2)]
    )
  ];

  constructor(private slService: shoppinglistService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
