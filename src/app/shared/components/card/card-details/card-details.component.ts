import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
})
export class CardDetailsComponent implements OnInit {
	private forecastData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
	public forecast$ = this.forecastData$.asObservable();

	public activeForecast: ForecastType = ForecastType.TEMPERATURE;
	public forecastType = ForecastType;
	public numberOfHours: number = 8;

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
