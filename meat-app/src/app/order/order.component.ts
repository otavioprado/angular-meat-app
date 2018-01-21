import { Order, OrderItem } from './order.model';
import { CartItem } from 'app/restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
      { label: 'Dinheiro', value: 'MON'},
      { label: 'Cartão de Débito', value: 'DEB'},
      { label: 'Cartão Refeição', value: 'REF'}
  ];

  constructor(private orderService: OrderService) {

  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: any) {
    this.orderService.increase(item);
  }

  decreaseQty(item: any) {
    this.orderService.decrease(item);
  }

  remove(item: any) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id)
    );

    this.orderService.checkOrder(order).subscribe(
      (orderId: string) => {
        console.log(`Compra concluída: ${orderId}`);
        this.orderService.clear();
      }
    );
  }

}
