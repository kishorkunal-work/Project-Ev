import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import jwt_decode from "jwt-decode";
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticated() {
    if (this.User && !this.tokenExpired(this.User.token)) {
      return true;
    }
    return false;
  }

  userSubject = new BehaviorSubject(undefined);

  private AUTH_API_SERVER = "http://localhost:8080/api/auth/";

  private _user: User = null;


  constructor(private httpClient: HttpClient, private router: Router, private toaster: ToasterService) {
  }

  get User(): User {
    const localUser_str = localStorage.getItem("token");
    if (localUser_str) {
      const user: User = JSON.parse(localUser_str);
      if (this.tokenExpired(user.token)) {
        // token expired
        this.router.navigateByUrl('/login');
      } else {
        this._user = user;
      }
    }
    return this._user;
  }


  set User(value) {
    localStorage.setItem("token", JSON.stringify(value))
    this._user = value;
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }



  public signIn(body) {
    var promise = new Promise((resolve, reject) => {
      this.httpClient.post(this.AUTH_API_SERVER + "signin", body).subscribe(res => {
        if (res) {
          this.User = {
            email: res["email"],
            token: res["accessToken"],
            id: res["id"],
            decoded: jwt_decode(res["accessToken"]),
          }
          this.userSubject.next(this.User);
          this.toaster.showSuccess("Login Successful !!", `Welcome ${this.User.decoded.user.name}`)
          resolve(true);
        }
      })
    });
    return promise;
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
  }


}
