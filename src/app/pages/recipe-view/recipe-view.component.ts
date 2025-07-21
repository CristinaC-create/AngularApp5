import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-recipe-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent {
  shoppingList: string[] = [];

  constructor(private cartService: CartService) { }

  recipes = [
    {
      name: 'Creamy Garlic Pasta',
      description: 'A rich and creamy garlic pasta that’s quick and delicious!',
      imageUrl: 'assets/images/pasta.jpeg',
      ingredients: ['Pasta', 'Garlic', 'Cream', 'Parmesan', 'Salt', 'Pepper'],
      instructions: [
        'Boil the pasta until al dente.',
        'Sauté garlic in butter.',
        'Add cream and simmer.',
        'Mix in parmesan cheese.',
        'Combine with pasta and serve.'
      ]
    },
    {
      name: 'Grilled Chicken',
      description: 'Juicy, herby grilled chicken perfect for summer meals.',
      imageUrl: 'assets/images/chicken.jpeg',
      ingredients: ['Chicken breast', 'Olive oil', 'Lemon', 'Herbs', 'Salt', 'Pepper'],
      instructions: [
        'Marinate chicken in oil, lemon, and herbs.',
        'Preheat grill to medium-high.',
        'Grill chicken 5–6 minutes per side.',
        'Rest before serving.'
      ]
    },
    {
      name: 'Fresh Garden Salad',
      description: 'A refreshing, colorful mix of garden vegetables.',
      imageUrl: 'assets/images/salad.jpeg',
      ingredients: ['Lettuce', 'Tomatoes', 'Cucumber', 'Carrots', 'Vinaigrette'],
      instructions: [
        'Chop all vegetables.',
        'Toss with vinaigrette.',
        'Serve chilled.'
      ]
    }
  ];

  addToShoppingList(ingredient: string) {
    if (!this.shoppingList.includes(ingredient)) {
      this.shoppingList.push(ingredient);
    }
  }

  removeFromShoppingList(ingredient: string) {
    this.shoppingList = this.shoppingList.filter(item => item !== ingredient);
  }

  addToCart(recipe: any) {
    this.cartService.addToCart({
      name: recipe.name,
      image: recipe.imageUrl, // ✅ maps imageUrl → image for cart
      description: recipe.description
    });
  }
  }
