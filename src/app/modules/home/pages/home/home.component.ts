import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeather } from '../../../../shared/models/weather/current-weather.class';
import { WeatherService } from '../../../../core/http/weather/weather.service';
import { Store } from '@ngrx/store';
import { getForecast } from '../../../../core/store/actions/forecast.actions';
import { clearSelected } from '../../../../core/store/actions/user-interface.actions';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	public currentWeather$: Observable<CurrentWeather[]> = this.weatherService.getCurrentWeather();

	constructor(private weatherService: WeatherService, private store: Store) {}

	public close() {
		this.store.dispatch(clearSelected());
	}

	public openDetails(location: CurrentWeather) {
		this.store.dispatch(getForecast({ lat: location.cord.lat, lon: location.cord.lon, id: location.place.id }));
	}
}
