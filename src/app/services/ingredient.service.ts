import { Ingredient } from '../models/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable()
export class IngredientService {
  ingredients: Ingredient[] = [new Ingredient('Apples', '5 unidades'), new Ingredient('Meet', '500 gramos')];
}
