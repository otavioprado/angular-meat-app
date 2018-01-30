import { OrderService } from 'app/order/order.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ShoppingCartService } from './../restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    ShoppingCartService,
    RestaurantsService,
    OrderService
  ]
})
export class CoreModule {

}
