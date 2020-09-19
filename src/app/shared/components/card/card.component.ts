import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CurrentWeather } from '../../models/weather/current-weather.class';
import {faCloud, faCloudRain, faThermometerFull, faThermometerHalf, faWind} from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../../../core/http/weather/weather.service';
import {BehaviorSubject} from "rxjs";
import * as shape from 'd3-shape';

export enum CardState {
	CLOSED = 'closed',
	STANDARD = 'standard',
	EXPANDED = 'expanded',
}

@Component({
	selector: 'card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	private _chartData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
	public chartData$ = this._chartData$.asObservable();
	@Input() public weatherData: CurrentWeather;
	@Input() public set collapsed(val: CardState) {
		this.state = val;
	}
	public state: CardState = CardState.STANDARD;
	public cardState = CardState;
	public windIcon = faWind;
	public thermometherIcon = faThermometerHalf;
	public thermometherFull = faThermometerFull;
	public cloudIcon = faCloudRain;
	public cloudIcon2 = faCloud;
	public forecast$ = this.service.getForecastForCity(44.8, 20.47);

	curve = shape.curveMonotoneX;
	constructor(private service: WeatherService) {}

	ngOnInit(): void {
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
