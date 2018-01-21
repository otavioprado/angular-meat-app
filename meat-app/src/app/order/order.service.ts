import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurants/restaurant-detail/shopping-cart/cart-item.model';

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService) {  }

  itemsValue(): number {
    return this.cartService.total();
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increase(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decrease(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }
}
