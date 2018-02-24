import { LoggedInGuard } from './security/loggedin.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderSummaryComponent } from 'app/order-summary/order-summary.component';
import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';
import { MenuComponent } from 'app/restaurants/restaurant-detail/menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";
import { RestaurantDetailComponent } from 'app/restaurants/restaurant-detail/restaurant-detail.component';
import { LoginComponent } from 'app/security/login/login.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login/:to', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full'},
      { path: 'menu', component: MenuComponent},
      { path: 'reviews', component: ReviewsComponent},
    ]},
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'order', loadChildren: './order/order.module#OrderModule',
    canLoad: [ LoggedInGuard ], canActivate: [ LoggedInGuard ] },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '**', component: NotFoundComponent }
];
