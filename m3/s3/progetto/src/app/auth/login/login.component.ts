import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { iLogin } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  loginData:iLogin = {
    email: 'inserisci email',
    password: 'password'
  }

  save(){
    this.authSvc.login(this.loginData)
    .subscribe(data => {
        this.router.navigate(['/home'])
    })
  }

}
