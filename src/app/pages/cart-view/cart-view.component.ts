import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./cart-view.component.css'], 
  templateUrl: './cart-view.component.html',
})
export class CartViewComponent {
  items: any[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.items = this.cartService.getItems(); // update view
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
  }
  
}