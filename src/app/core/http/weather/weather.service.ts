import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEATHER_API_KEY } from '../../../configs/api-key.config';
import { map } from 'rxjs/operators';
import { CurrentWeather } from '../../../shared/models/weather/current-weather.class';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { cityIds } from '../../../configs/city-ids.config';

@Injectable({
	providedIn: 'root',
})
export class WeatherService {
	private apiUrl = environment.baseApiUrl;
	private cities: string = cityIds.toString();

	constructor(private http: HttpClient) {}

	public getCurrentWeather(): Observable<CurrentWeather[]> {
		return this.http
			.get<CurrentWeather>(`${this.apiUrl}group?id=${this.cities}&units=metric&appid=${WEATHER_API_KEY}`)
			.pipe(
				map((res: any): CurrentWeather[] => {
					return res.list.map((data) => ({
						place: {
							id: data.id,
							city: data.name,
							coord: {
								lat: data.coord.lat,
								lon: data.coord.lon,
							},
						},
						weather: {
							temperature: {
								current: data.main.temp,
								max: data.main.temp_max,
								min: data.main.temp_min,
								feeling: data.main.feels_like,
							},
							wind: {
								deg: data.wind.deg,
								speed: data.wind.speed,
							},
							humidity: data.main.humidity,
							pressure: data.main.pressure,
							status: data.weather[0].main,
						},
					}));
				})
			);
	}

	// USE THIS FOR FORECAST
	public test() {
		return this.http.get(`${this.apiUrl}onecall?lat=41.89&lon=12.48&appid=${WEATHER_API_KEY}`);
	}
}
