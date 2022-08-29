import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { User } from '../model/auth.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  domain = `https://devapi.digitaleast.mobi`

  constructor(private http: HttpClient) { }


  getAuthenticationToken(data: User) {
    const { username, password } = data;
    const URL = `${this.domain}/api/v1/auth/login`
    return this.http.post(URL, { username, password })
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      );
  }


  getUserDetails() {
    let auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    const requestOptions = { headers };
    const URL = `${this.domain}/api/v1/user`
    return this.http.get(URL, requestOptions)
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      );
  }

  public get currentUserValue() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
}

}
