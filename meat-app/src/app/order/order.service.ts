import { LoginService } from './../security/login/login.service';
import { MEAT_API } from './../app.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurants/restaurant-detail/shopping-cart/cart-item.model';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private httpClient: HttpClient, private loginService: LoginService) {  }

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
    let headers = new HttpHeaders();

    if(this.loginService.isLoggedIn()) {
      headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`);
    }

    return this.httpClient.post<Order>(`${ MEAT_API }/orders`, order, { headers: headers })
        .map(order => order.id);
  }

  clear() {
    this.cartService.clear();
  }
}
