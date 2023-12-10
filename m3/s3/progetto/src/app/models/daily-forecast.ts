import { HourlyForecast } from './wheather';
export class DailyForecast {
public hourlyForecasts:HourlyForecast[] = [];
public date:Date;
constructor(date:Date){
  this.date=date;
}
}
