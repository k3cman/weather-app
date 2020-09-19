import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEATHER_API_KEY } from '../../../configs/weather-api-key';
import { map } from 'rxjs/operators';
import { CurrentWeather } from '../../../shared/models/weather/current-weather.class';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class WeatherService {
	private apiUrl = environment.baseApiUrl;
	private cities: string = '792680,2867714,2643741,3169070,658225';

	constructor(private http: HttpClient) {}

	public getCurrentWeather(): Observable<CurrentWeather[]> {
		return this.http
			.get<CurrentWeather>(`${this.apiUrl}group?id=${this.cities}&units=metric&appid=${WEATHER_API_KEY}`)
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
						feeling: data.main.feels_like,
					}));
				})
			);
	}

	public getOneCity() {
		return this.http.get(`${this.apiUrl}weather?id=2172797&appid=${WEATHER_API_KEY}`);
	}

	public getForecast(id: string) {
		return this.http.get(`${this.apiUrl}forecast?id=${id}&appid=${WEATHER_API_KEY}`);
	}

	// USE THIS FOR FORECAST
	public test() {
		return this.http.get(`${this.apiUrl}onecall?lat=41.89&lon=12.48&appid=${WEATHER_API_KEY}`);
	}
}
