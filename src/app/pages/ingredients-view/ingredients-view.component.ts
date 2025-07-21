import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingredients-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredients-view.component.html',
  styleUrls: ['./ingredients-view.component.css']
})
export class IngredientsViewComponent {
  recipes = [
    {
      name: 'Creamy Garlic Pasta',
      ingredients: ['Pasta', 'Garlic', 'Cream', 'Parmesan', 'Salt', 'Pepper']
    },
    {
      name: 'Grilled Chicken',
      ingredients: ['Chicken breast', 'Olive oil', 'Lemon', 'Herbs', 'Salt', 'Pepper']
    },
    {
      name: 'Fresh Garden Salad',
      ingredients: ['Lettuce', 'Tomatoes', 'Cucumber', 'Carrots', 'Vinaigrette']
    }
  ];

  uniqueIngredients: string[] = [];

  constructor() {
    const allIngredients = this.recipes.flatMap(recipe => recipe.ingredients);
    this.uniqueIngredients = Array.from(new Set(allIngredients)).sort();
  }
}