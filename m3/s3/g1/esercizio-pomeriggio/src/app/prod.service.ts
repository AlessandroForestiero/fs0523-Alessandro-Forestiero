import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prod } from './models/prod';
import { Products } from './models/products';

@Injectable({
  providedIn: 'root',
})
export class ProdService {
  apiUrl: string = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}
  getAll(): Observable<Products> {
    return this.http.get<Products>(this.apiUrl);
  }
  getById(id:number):Observable<Prod>{
    return this.http.get<Prod>(`${this.apiUrl}/${id}`);
  }
}
