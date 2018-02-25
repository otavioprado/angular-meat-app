import { LoginService } from './../../security/login/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/security/login/user.model';

@Component({
  selector: 'mt-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  user(): User {
    return this.loginService.user;
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  login() {
    this.loginService.handleLogin();
  }

  logout() {
    this.loginService.logout();
  }

}
