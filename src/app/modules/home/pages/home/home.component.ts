import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrentWeather } from '../../../../shared/models/weather/current-weather.class';
import { CardState } from '../../../../shared/components/card/card.component';
import { WeatherService } from '../../../../core/http/weather/weather.service';
import * as shape from 'd3-shape';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public currentWeather$: Observable<CurrentWeather[]> = this.weatherService.getCurrentWeather();
	public cardState = CardState;
	private _chartData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
	public chartData$ = this._chartData$.asObservable();

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

	public forecast$ = this.weatherService.getForecastForCity(44.8, 20.47);

	curve = shape.curveMonotoneX;

	constructor(private weatherService: WeatherService) {}

	public ngOnInit() {
		// this.currentWeather$.subscribe((val) => console.log(val));
		this.forecast$.subscribe((val: any) => {
			const hourly: any[] = val.hourly;
			const nextHours = hourly.slice(0, 10);
			console.log(new Date(nextHours[0].dt * 1000).getHours());

			const data = nextHours.map((element) => {
				return {
					name: new Date(element.dt * 1000).getHours().toString(),
					value: Math.ceil(element.temp),
				};
			});

			this._chartData$.next([
				{
					name: 'Temperature',
					series: [...data],
				},
			]);
		});

		this.chartData$.subscribe((val) => console.log(val));
	}
}
