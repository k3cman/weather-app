import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeather } from '../../../../shared/models/weather/current-weather.class';
import { Store } from '@ngrx/store';
import { getForecast } from '../../../../core/store/actions/forecast.actions';
import { selectCurrentWeather } from '../../../../core/store/selectors/current-weather.selector';
import { slideInOutAnimation } from '../../../../shared/animations/slide-in.animation';

/**
 * Home component
 * The base of the application
 */
@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	animations: [slideInOutAnimation],
})
export class HomeComponent {
	// Current weather observable
	// Gets current weather for 5 cities from the store
	public currentWeather$: Observable<CurrentWeather[]> = this.store.select(selectCurrentWeather);

	constructor(private store: Store) {}

	// Open forecast for the selected location
	public openForecast(location: CurrentWeather) {
		this.store.dispatch(getForecast({ lat: location.cord.lat, lon: location.cord.lon, id: location.place.id }));
	}
	// Function for NgFor trackBy
	public trackByIndex(index: number) {
		return index;
	}
}
