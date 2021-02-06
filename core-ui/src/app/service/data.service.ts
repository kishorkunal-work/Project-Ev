import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000";
  constructor(private httpClient: HttpClient, private loginService: LoginService) {
  }

  public checkEligibility(body) {
    const headers = { 'x-access-token': this.loginService.User.token, 'Content-Type': 'application/json' };
    return this.httpClient.post(this.REST_API_SERVER + "/GetEligibility", body, { headers }).toPromise();
  }

  uploadFile(formData: FormData) {
    const headers = { 'x-access-token': this.loginService.User.token, 'Content-Type': 'application/json' };
    return this.httpClient.post(this.REST_API_SERVER + "/UploadPolicyFile", formData, { headers }).toPromise();
  }




}
