import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: any[] = [];

  addToCart(item: any) {
    this.items.push(item);
    this.saveCart();
  }

  getItems() {
    return [...this.items];
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.saveCart();
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cart');
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  loadCart() {
    const stored = localStorage.getItem('cart');
    this.items = stored ? JSON.parse(stored) : [];
  }
}