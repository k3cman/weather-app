import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as shape from 'd3-shape';
import { TemperaturePipe } from '../../../core/pipes/temperature/temperature.pipe';
import { ForecastType } from '../../models/enums/forecast-type.enum';
import { TimeOfDay } from '../../models/enums/time-of-day.enum';

/**
 * Forecast Chart component
 * containing Chart with forecast for selected location
 */
@Component({
	selector: 'forecast-chart',
	templateUrl: './forecast-chart.component.html',
	styleUrls: ['./forecast-chart.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [TemperaturePipe],
})
export class ForecastChartComponent {
	// Chart Data BS
	private _chartData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
	// Chart Data Observable
	// Used for displaying the data with the help of async pipe
	public chartData$ = this._chartData$.asObservable();
	// Selected number of hours to show forecast for
	public numberOfHours: number = 8;
	// Setter for setting the numberOfHours and initializing Chart
	@Input() set selectedPeriod(value: number) {
		this.numberOfHours = value;
		this.initializeChart();
	}
	// Determining the theme of the chart library depending on the sunrise and sunset
	@Input() timeOfDay: TimeOfDay;
	// Selected forecast type to show (Wind or Temperature)
	@Input() public forecastType: ForecastType;
	// For keeping the received data from parent component
	private _data: any;
	@Input() public set data(data: any) {
		this._data = data;
		this.initializeChart();
	}

	// CHART CONFIG
	// Curve function imported from D3 for making chart lines curved
	public curve = shape.curveMonotoneX;
	// Function for adding temperature symbol at the Y axis label of the chart
	public formatYAxis = (value) =>
		`${this.forecastType === ForecastType.TEMPERATURE ? this.temperaturePipe.transform(value) : value}`;

	constructor(private temperaturePipe: TemperaturePipe) {}

	// Function for mapping the data for the chart
	// And triggering its render with calling _items$ BehaviourSubject.next()
	private initializeChart() {
		// Separate hourlyForecast to a const
		const hourlyForecast: any[] = this._data.hourly;
		// Get forecast only for the number of hours selected
		const nextHours = hourlyForecast.slice(0, this.numberOfHours);
		// Generate temperature forecast array
		const temperature = nextHours.map((temp) => {
			return {
				// Calculate human readable hour for current temperature
				name: new Date(temp.dt * 1000).getHours().toString() + ':00',
				// Use Math.ceil to get round number of temperature
				value: temp.temp,
			};
		});
		// Generate wind forecast array
		const wind = nextHours.map((w) => {
			return {
				// Calculate human readable hour for current wind
				name: new Date(w.dt * 1000).getHours().toString() + ':00',
				// Use Math.ceil to get round number of wind speed
				value: Math.ceil(w.wind_speed),
			};
		});

		// Initialize the chart and send all the previously mapped data
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
