import { MEAT_API } from './../app.api';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurants/restaurant-detail/shopping-cart/cart-item.model';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: Http) {  }

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

  checkOrder(order: Order): Observable<string>  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`${ MEAT_API }/orders`, JSON.stringify(order), new RequestOptions({ headers: headers}))
        .map(response => response.json())
        .map(order => order.id);
  }

  clear() {
    this.cartService.clear();
  }
}
