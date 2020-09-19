import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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



	constructor(private weatherService: WeatherService) {}

	public ngOnInit() {
		// this.currentWeather$.subscribe((val) => console.log(val));

	}
}
