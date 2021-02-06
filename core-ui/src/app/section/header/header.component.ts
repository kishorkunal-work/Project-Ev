import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentPath = 'home'
  username = "Guest";
  constructor(private _loginService: LoginService) {
    this._loginService.userSubject.subscribe(user => {
      if (user && user.decoded) {
        this.username = user.decoded.user.name
      }
    })
  }

  ngOnInit(): void {

  }

}
