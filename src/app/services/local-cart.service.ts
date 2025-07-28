import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalCartService {
  private cartItems: any[] = [];

  constructor(private http: HttpClient) { }

  getCart(): Observable<any[]> {
    if (this.cartItems.length > 0) {
      return of(this.cartItems);
    }
    return this.http.get<any[]>('assets/data/cart-data.json').pipe(
      map(data => {
        this.cartItems = data;
        return data;
      }),
      catchError(() => of([]))
    );
  }

  addItem(item: any): void {
    this.cartItems.push(item);
  }

  getItems(): any[] {
    return this.cartItems;
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}