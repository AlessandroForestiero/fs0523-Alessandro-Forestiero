import { HourlyForecast } from '../models/wheather';

import { Component, OnInit } from '@angular/core';
import { WheaterService } from '../wheater.service';
import { Latlon } from '../models/latlon';
import { CurrentWeather } from '../models/current-weather';
import { DailyForecast } from '../models/daily-forecast';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  latLon!: Latlon;
  currentWeather: CurrentWeather[] = [];
  dailyForecasts: DailyForecast[] = [];
  nomeCitta:string = '';
  hours: Date[] = [];
  errore:string|null=null;

  constructor(private weatherSvc: WheaterService ){}

  ngOnInit(): void {}

  groupByDay(forecasts: HourlyForecast[]): DailyForecast[] {
    let groups: DailyForecast[] = [];
    let m: Map<number, DailyForecast> = new Map<number, DailyForecast>();
    forecasts.forEach((hf) => {
      let day: Date = new Date(hf.dt_txt);
      day.setHours(0, 0, 0);
      if (m.has(day.getTime())) {
        let df: DailyForecast | undefined = m.get(day.getTime());
        df?.hourlyForecasts.push(hf);
      } else {
        let df: DailyForecast = new DailyForecast(day);
        df.hourlyForecasts.push(hf);
        m.set(day.getTime(), df);
        groups.push(df);
      }
    });
    return groups;
  }

  caricaDati() {
    this.dailyForecasts = [];
    this.hours = [];
    this.errore=null;
    this.weatherSvc.getLatLonByCity(this.nomeCitta).subscribe((r) => {
      if (r != null) {
        this.latLon = r;
        this.weatherSvc
          .getWeatherByLatLon(this.latLon.latitudine, this.latLon.longitudine)
          .subscribe((r: HourlyForecast[]) => {
            this.dailyForecasts = this.groupByDay(r);

            this.hours = this.dailyForecasts[1].hourlyForecasts.map(
              (hf) => new Date(hf.dt_txt)
            );

            console.log(this.dailyForecasts);
          });
      }else {
        this.errore='Città non trovata'
      }
    });

    console.log(this.currentWeather);
  }

  getWeather(df: DailyForecast, h: Date): string | null {
    for (let hf of df.hourlyForecasts) {
      let hf_h = new Date(hf.dt_txt);
      if (
        hf_h.getHours() == h.getHours() &&
        hf_h.getMinutes() == h.getMinutes()
      ) {
        return hf.weather[0].description;
      }
    }
    return null;
  }



}
