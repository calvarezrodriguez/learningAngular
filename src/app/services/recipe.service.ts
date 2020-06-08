import { Recipe } from '../models/recipe.model';

export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'Receta de Prueba N°1',
      'Esta es simplemente una prueba',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Recipe(
      'Receta de Prueba N°2',
      'Esta es simplemente una prueba',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];
}
