import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";
import { AboutComponent } from 'app/about/about.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'about', component: AboutComponent }
];
