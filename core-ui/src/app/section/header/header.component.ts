import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentPath = 'home'
  username = "Guest";
  AuthUser: User = null;
  loggedIn: boolean = false;
  constructor(private _loginService: LoginService) {
    this.username = this._loginService.User && this._loginService.User.decoded.user.name ? this._loginService.User.decoded.user.name : "Guest";
    this._loginService.userSubject.subscribe(user => {
      if (user && user.decoded) {
        this.username = user.decoded.user.name
        this.AuthUser = user;
        this.loggedIn = true;
      }
      else {
        this.username = "Guest"
        this.AuthUser = null;
        this.loggedIn = false;
      }
    })
  }

  ngOnInit(): void {

  }

  logout() {
    this._loginService.logout();
    this.loggedIn = false;
    this.username = "Guest"
  }

}
