import { NotificationService } from './messages/notification.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { OrderService } from 'app/order/order.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ShoppingCartService } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../security/login/login.service';

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SnackbarComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ShoppingCartService, RestaurantsService, OrderService, LoginService, NotificationService ]
    }
  }
}
