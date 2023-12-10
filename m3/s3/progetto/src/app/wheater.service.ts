import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { GeoCod } from './models/geo-cod';
import { Wheather, Weather } from './models/wheather';

@Injectable({
  providedIn: 'root',
})
export class WheaterService {
  apiKey: string = '163d8aa2ab0e4c910d88e2814ccc7e2b';
  apiUrlGeoCoding: string = `http://api.openweathermap.org/geo/1.0/direct`;
  apiUrlWeather: string = `https://api.openweathermap.org/data/2.5/forecast`;

  constructor(private http: HttpClient) {}

  getLatLonByCity(city: string) {
    return this.http
      .get<GeoCod>(this.apiUrlGeoCoding + `?q=${city}&appid=${this.apiKey}`)
      .pipe(
        tap((r) => console.log(r)),
        map((r) => {
          if (r.length > 0) {
            return { latitudine: r[0].lat, longitudine: r[0].lon };
          } else {
            return null;
          }
        })
      );
  }
  getWeatherByLatLon(lat: number, lon: number) {
    return this.http
      .get<Wheather>(
        this.apiUrlWeather + `?lat=${lat}&lon=${lon}&appid=${this.apiKey}`
      )
      .pipe(
        map((r) => {
          return r.list;
        })
      );
  }
}
