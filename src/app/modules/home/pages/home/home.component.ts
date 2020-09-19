import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeather } from '../../../../shared/models/weather/current-weather.class';
import { CardState } from '../../../../shared/components/card/card.component';
import { WeatherService } from '../../../../core/http/weather/weather.service';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public currentWeather$: Observable<CurrentWeather[]> = this.weatherService.getCurrentWeather();
	public cardState = CardState;
	constructor(private weatherService: WeatherService) {}

	public ngOnInit() {
		// this.currentWeather$.subscribe((val) => console.log(val));
		this.weatherService.getForecastForCity(44.8, 20.47).subscribe((val) => console.log(val));
	}
}
