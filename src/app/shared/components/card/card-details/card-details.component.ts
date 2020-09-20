import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/models/app.state';
import { selectCurrentForecast } from '../../../../core/store/selectors/forecast.selector';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ForecastType } from '../../../models/enums/forecast-type.enum';

@Component({
	selector: 'card-details',
	templateUrl: './card-details.component.html',
	styleUrls: ['./card-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsComponent implements OnInit {
	private forecastData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
	public forecast$ = this.forecastData$.asObservable();
	public activeForecast: ForecastType = ForecastType.TEMPERATURE;
	public numberOfHours: number = 8;

	public forecastButtons = [
		{
			value: ForecastType.TEMPERATURE,
			title: 'Temperature',
		},
		{
			value: ForecastType.WIND,
			title: 'Wind',
		},
	];

	public hourButtons = [
		{
			value: 8,
			title: '8h',
		},
		{
			value: 12,
			title: '12h',
		},
		{
			value: 24,
			title: '24h',
		},
	];

	@Output() public readonly close: EventEmitter<void> = new EventEmitter<void>();

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.store
			.select(selectCurrentForecast)
			.pipe(filter((e) => !!e))
			.subscribe((val) => {
				this.forecastData$.next(val);
			});
	}

	public setForecastType(type: ForecastType) {
		this.activeForecast = type;
	}

	public changeHours(number: number) {
		this.numberOfHours = number;
	}
}
