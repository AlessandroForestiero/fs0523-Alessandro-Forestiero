
 import { Component, OnInit } from '@angular/core';
 import { WheaterService } from './wheater.service';

 import { iAccessData } from './models/i-access-data';
 import { JwtHelperService } from '@auth0/angular-jwt';

 @Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
 })
 export class AppComponent implements OnInit {
   jwtHelper: JwtHelperService = new JwtHelperService();
   nomeUtente:string|null=null;


   constructor(private weatherSvc: WheaterService) {}

   ngOnInit(){



    //  const userJson: string | null = localStorage.getItem('accessData');
    // if (!userJson) return;

    // const accessData: iAccessData = JSON.parse(userJson);
    // if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return;


    //  this.nomeUtente=accessData.user.nome;

   }

   }



