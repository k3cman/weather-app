import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/models/app.state';
import { selectCurrentForecast } from '../../../../core/store/selectors/forecast.selector';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

export enum ForecastType {
	TEMPERATURE = 'temperature',
	WIND = 'wind',
}

import * as shape from 'd3-shape';
import { TemperaturePipe } from '../../../../core/pipes/temperature/temperature.pipe';
@Component({
	selector: 'card-details',
	templateUrl: './card-details.component.html',
	styleUrls: ['./card-details.component.scss'],
	providers: [TemperaturePipe],
})
export class CardDetailsComponent implements OnInit {
	@Output() public readonly close: EventEmitter<void> = new EventEmitter<void>();
	private _chartData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
	public chartData$ = this._chartData$.asObservable();

	public activeForecast: ForecastType = ForecastType.TEMPERATURE;
	public forecastType = ForecastType;

	formatYAxis = (value) =>
		`${this.activeForecast === ForecastType.TEMPERATURE ? this.temperaturePipe.transform(value) : value}`;

	constructor(private store: Store<AppState>, private temperaturePipe: TemperaturePipe) {}

	curve = shape.curveMonotoneX;
	ngOnInit(): void {
		this.store
			.select(selectCurrentForecast)
			.pipe(filter((e) => !!e))
			.subscribe((val) => {
				const hourly: any[] = val.hourly;
				const nextHours = hourly.slice(0, 10);

				const temperature = nextHours.map((element) => {
					return {
						name: new Date(element.dt * 1000).getHours().toString() + ':00',
						value: element.temp,
					};
				});

				const wind = nextHours.map((element) => {
					return {
						name: new Date(element.dt * 1000).getHours().toString() + ':00',
						value: Math.ceil(element.wind_speed),
					};
				});

				this._chartData$.next({
					temperature: [
						{
							name: 'Temperature',
							series: [...temperature],
						},
					],
					wind: [
						{
							name: 'Wind',
							series: [...wind],
						},
					],
				});
			});
	}

	setForecastType(type: ForecastType) {
		this.activeForecast = type;
	}
}
