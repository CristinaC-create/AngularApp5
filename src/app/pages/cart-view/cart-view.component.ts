import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  items: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.reloadCart(); // Load from localStorage on view init
  }

  reloadCart() {
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.items = this.cartService.getItems();
    this.cartService.saveCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
  }

  saveCart() {
    this.cartService.saveCart();
  }
}