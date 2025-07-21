import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Import this!
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // ✅ Include this
})
export class HomeComponent implements OnInit {
  searchTerm = '';
  cartCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.updateCartCount();
  }

  searchRecipes() {
    console.log('Searching for:', this.searchTerm);
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    this.updateCartCount();
  }

  updateCartCount() {
    this.cartCount = this.cartService.getItems().length;
  }
}
