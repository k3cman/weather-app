import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEATHER_API_KEY } from '../consts/weather-api';
import { map } from 'rxjs/operators';
import { CurrentWeather } from '../models/weather/current-weather.class';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    private cities: string = '792680,2867714,2643741,3169070,658225';

    constructor(private http: HttpClient) {}

    public getCurrentWeather(): Observable<CurrentWeather[]> {
        return this.http
            .get<CurrentWeather>(
                `http://api.openweathermap.org/data/2.5/group?id=${this.cities}&units=metric&appid=${WEATHER_API_KEY}`
            )
            .pipe(
                map((res: any) => {
                    return res.list.map((data) => ({
                        place: {
                            id: data.id,
                            city: data.name,
                        },
                        humidity: data.main.humidity,
                        pressure: data.main.pressure,
                        temperature: data.main.temp,
                        max: data.main.temp_max,
                        min: data.main.temp_min,
                        status: data.weather[0].main,
                        wind: {
                            deg: data.wind.deg,
                            speed: data.wind.speed,
                        },
                    }));
                })
            );
    }

    public getOneCity() {
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=${WEATHER_API_KEY}`);
    }

    public getForecast() {
        return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?id=792680&appid=${WEATHER_API_KEY}`);
    }
}
