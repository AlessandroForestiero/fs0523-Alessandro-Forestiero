import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iRegister } from '../models/register';
import { iAccessData } from '../models/i-access-data';
import { BehaviorSubject, Observable, map, tap, throwError } from 'rxjs';
import { iLogin } from '../models/login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();

  authSubject = new BehaviorSubject<iAccessData | null>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map((user: iAccessData | null) => !!user));

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.restoreUser();
  }


  registerUrl: string = environment.apiUrl + '/register';
  loginUrl: string = environment.apiUrl + '/login';

  signUp(data: iRegister): Observable<iAccessData> {
    return this.http.post<iAccessData>(this.registerUrl, data);
  }

  login(data: iLogin): Observable<iAccessData> {
    return this.http.post<iAccessData>(this.loginUrl, data).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('accessData', JSON.stringify(data));

        this.autoLogout(data.accessToken);
      })
    );
  }

  autoLogout(jwt: string) {
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs = expDate.getTime() - new Date().getTime();

    setTimeout(() => {
      this.logout();
    }, expMs);
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth/login']);
  }


  restoreUser() {
    const userJson: string | null = localStorage.getItem('accessData');
    if (!userJson) return;

    const accessData: iAccessData = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return;


    this.authSubject.next(accessData);
    this.autoLogout(accessData.accessToken);
  }

  errors(err: any) {
    switch (err.error) {
      case 'Email and Password are required':
        return new Error('Email e password obbligatorie');
        break;
      case 'Email already exists':
        return new Error('Utente esistente');
        break;
      case 'Email format is invalid':
        return new Error('Email scritta male');
        break;
      case 'Cannot find user':
        return new Error('utente inesistente');
        break;
      default:
        return new Error('Errore');
        break;
    }
  }
}
