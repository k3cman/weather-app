import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeather } from '../../../../shared/models/weather/current-weather.class';
import { CardState } from '../../../../shared/components/card/card.component';
import { WeatherService } from '../../../../core/http/weather/weather.service';
import { Store } from '@ngrx/store';
import { getForecast } from '../../../../core/store/actions/forecast.actions';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public currentWeather$: Observable<CurrentWeather[]> = this.weatherService.getCurrentWeather();
	public cardState = CardState;

	data: any = [
		{
			name: 'Temperature',
			series: [
				{
					name: '20',
					value: 29,
				},
				{
					name: '21',
					value: 32,
				},
				{
					name: '22',
					value: 16,
				},
				{
					name: '23',
					value: 14,
				},
				{
					name: '00',
					value: 19,
				},
				{
					name: '01',
					value: 29,
				},
				{
					name: '02',
					value: 29,
				},
			],
		},
		{
			name: 'Wind',
			series: [
				{
					name: '20',
					value: 11,
				},
				{
					name: '21',
					value: 12,
				},
				{
					name: '22',
					value: 5,
				},
				{
					name: '23',
					value: 4,
				},
				{
					name: '00',
					value: 5,
				},
				{
					name: '01',
					value: 6,
				},
				{
					name: '02',
					value: 9,
				},
			],
		},
	];

	public selected = null;

	constructor(private weatherService: WeatherService, private store: Store) {}

	public ngOnInit() {
		// this.store.dispatch(getCurrentWeather());
		// this.currentWeather$.subscribe((val) => console.log(val));
	}

	close() {
		this.selected = null;
	}

	openDetails(location: CurrentWeather) {
		console.log(location);
		this.store.dispatch(getForecast({ lat: location.cord.lat, lon: location.cord.lon, id: location.place.id }));
	}
}
