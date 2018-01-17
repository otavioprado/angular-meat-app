import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';
import { MenuComponent } from 'app/restaurants/restaurant-detail/menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";
import { AboutComponent } from 'app/about/about.component';
import { RestaurantDetailComponent } from 'app/restaurants/restaurant-detail/restaurant-detail.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full'},
      { path: 'menu', component: MenuComponent},
      { path: 'reviews', component: ReviewsComponent},
    ]},
  { path: 'about', component: AboutComponent }
];
