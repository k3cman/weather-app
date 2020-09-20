import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as shape from 'd3-shape';
import { TemperaturePipe } from '../../../core/pipes/temperature/temperature.pipe';
import { ForecastType } from '../../models/enums/forecast-type.enum';

@Component({
	selector: 'forecast',
	templateUrl: './forecast.component.html',
	styleUrls: ['./forecast.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [TemperaturePipe],
})
export class ForecastComponent {
	private _chartData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
	public chartData$ = this._chartData$.asObservable();
	public numberOfHours: number = 8;
	public dataSet: any;
	@Input() public set data(data: any) {
		this.dataSet = data;
		this.initializeChart();
	}
	public curve = shape.curveMonotoneX;
	public forecastTypes = ForecastType;
	public formatYAxis = (value) =>
		`${this.forecastType === ForecastType.TEMPERATURE ? this.temperaturePipe.transform(value) : value}`;

	@Input() forecastType: ForecastType;
	@Input() set selectedPeriod(value: number) {
		this.numberOfHours = value;
		this.initializeChart();
	}

	constructor(private temperaturePipe: TemperaturePipe) {}

	private initializeChart() {
		const hourly: any[] = this.dataSet.hourly;

		const nextHours = hourly.slice(0, this.numberOfHours);

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
	}
}
