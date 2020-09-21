import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/models/app.state';
import { selectCurrentForecast } from '../../../../core/store/selectors/forecast.selector';
import { filter } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ForecastType } from '../../../models/enums/forecast-type.enum';
import { HOUR_BUTTON_OPTIONS } from '../../../consts/hour-button-options';
import { FORECAST_BUTTON_OPTIONS } from '../../../consts/forecast-button-options';
import { Forecast } from '../../../models/weather/forecast.model';
import { TimeOfDay } from '../../card-wrapper/card-wrapper.component';

@Component({
	selector: 'card-details',
	templateUrl: './card-details.component.html',
	styleUrls: ['./card-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsComponent implements OnInit, OnDestroy {
	@Input() public timeOfDay: TimeOfDay;
	private forecastData$: BehaviorSubject<Forecast> = new BehaviorSubject<Forecast>(null);
	public forecast$ = this.forecastData$.asObservable();
	public activeForecast: ForecastType = ForecastType.TEMPERATURE;
	public numberOfHours: number = 8;

	public forecastButtons = FORECAST_BUTTON_OPTIONS;

	public hourButtons = HOUR_BUTTON_OPTIONS;
	private subscriptions: Subscription[] = [];
	@Output() public readonly close: EventEmitter<void> = new EventEmitter<void>();
	public chartLoaded: boolean = false;

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.subscriptions.push(
			this.store
				.select(selectCurrentForecast)
				.pipe(filter((e) => !!e))
				.subscribe((val) => {
					this.forecastData$.next(val);
				})
		);
	}

	public setForecastType(type: ForecastType) {
		this.activeForecast = type;
	}

	public changeHours(number: number) {
		this.numberOfHours = number;
	}

	public ngOnDestroy() {
		this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
	}
}
