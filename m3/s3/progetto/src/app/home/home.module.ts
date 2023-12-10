import { NgModule } from '@angular/core';


import { HomeRoutingModule } from './home-routing.module';

import { provideClientHydration } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    HomeRoutingModule,
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
