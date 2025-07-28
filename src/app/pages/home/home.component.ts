import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cartCount = 0;
  searchTerm = '';
  items: any[] = [];

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.loadCart(); // Load from localStorage
    this.items = this.cartService.getItems();
    this.cartCount = this.items.length;
  }

  addToCart(item: any): void {
    this.cartService.addToCart(item);
    this.items = this.cartService.getItems();
    this.cartCount = this.items.length;
  }

  searchRecipes(): void {
    console.log('Searching:', this.searchTerm);
  }
}