import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeather } from '../../../../shared/models/weather/current-weather.class';
import { CardState } from '../../../../shared/components/card/card.component';
import { WeatherService } from '../../../../core/http/weather/weather.service';
import { Store } from '@ngrx/store';
import { getForecast } from '../../../../core/store/actions/forecast.actions';
import { clearSelected } from '../../../../core/store/actions/user-interface.actions';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public currentWeather$: Observable<CurrentWeather[]> = this.weatherService.getCurrentWeather();
	public cardState = CardState;

	public selected = null;

	constructor(private weatherService: WeatherService, private store: Store) {}

	public ngOnInit() {
		// this.store.dispatch(getCurrentWeather());
		// this.currentWeather$.subscribe((val) => console.log(val));
	}

	close() {
		this.store.dispatch(clearSelected());
	}

	openDetails(location: CurrentWeather) {
		this.store.dispatch(getForecast({ lat: location.cord.lat, lon: location.cord.lon, id: location.place.id }));
	}
}
