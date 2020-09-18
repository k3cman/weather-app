import { Component, OnDestroy } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CurrentWeather } from './models/weather/current-weather.class';
import { Observable } from 'rxjs';
import { CardState } from './components/elements/card/card.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	public currentWeather$: Observable<CurrentWeather[]> = this.weatherService.getCurrentWeather();
	public cardState = CardState;
	constructor(private weatherService: WeatherService) {
		this.weatherService.test().subscribe((val) => console.log(val));
	}
}
