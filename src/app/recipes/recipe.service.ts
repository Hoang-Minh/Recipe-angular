import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [];
  recipesChanged = new Subject<Recipe[]>();

  constructor(private http: HttpClient) {}

  getRecipes() {
    // return this.recipes.slice();
    return this.http.get<Recipe[]>(
      'https://recipe-2b298.firebaseio.com/recipes.json'
    );
  }
}
