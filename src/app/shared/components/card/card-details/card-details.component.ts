import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/models/app.state';
import { selectCurrentForecast } from '../../../../core/store/selectors/forecast.selector';
import { delay, filter } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ForecastType } from '../../../models/enums/forecast-type.enum';
import { HOUR_BUTTON_OPTIONS } from '../../../consts/hour-button-options';
import { FORECAST_BUTTON_OPTIONS } from '../../../consts/forecast-button-options';
import { Forecast } from '../../../models/weather/forecast.model';
import { TimeOfDay } from '../../../models/enums/time-of-day.enum';
import { ButtonValue } from '../../../models/elements/button-values.model';

/**
 * Card details component
 * containing Chart for forecast and buttons for changing the data of chart
 */
@Component({
	selector: 'card-details',
	templateUrl: './card-details.component.html',
	styleUrls: ['./card-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsComponent implements OnInit, OnDestroy {
	/**
	 * Responsible for displaying chart or loader
	 */
	public chartLoaded: boolean = false;
	/**
	 * Behaviour Subject for triggering when the data is received from the store
	 * @private
	 */
	private forecastData$: BehaviorSubject<Forecast> = new BehaviorSubject<Forecast>(null);
	/**
	 * used for binding forecastData$ to html with async pipe
	 */
	public forecast$ = this.forecastData$.asObservable().pipe(delay(400));
	/**
	 * Used for changing the forecast type that should be shown in chart
	 */
	public activeForecast: ForecastType = ForecastType.TEMPERATURE;
	/**
	 * Used for setting number of hours in the forecast chart
	 */
	public numberOfHours: number = 8;

	// Button configs
	/**
	 * Buttons for Forecast
	 */
	public forecastButtons: ButtonValue[] = FORECAST_BUTTON_OPTIONS;
	/**
	 * Buttons for hours
	 */
	public hourButtons: ButtonValue[] = HOUR_BUTTON_OPTIONS;
	/**
	 * Subscriptions array used for destroying subscriptions OnDestory
	 * @private
	 */
	private subscriptions: Subscription[] = [];
	/**
	 * For receiving calculated time of day
	 * Is it during the day or during the night
	 */
	@Input() public timeOfDay: TimeOfDay;
	/**
	 * Emitts when the close button is clicked
	 */
	@Output() public readonly close: EventEmitter<void> = new EventEmitter<void>();

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		/**
		 * Get data from the store OnInit
		 */
		this.subscriptions.push(
			this.store
				.select(selectCurrentForecast)
				.pipe(filter((e) => !!e))
				.subscribe((val) => {
					this.forecastData$.next(val);
				})
		);
	}

	/**
	 * Event handler for forecast type buttons
	 * @param type
	 */
	public setForecastType(type: ForecastType) {
		this.activeForecast = type;
	}
	/**
	 * Event handler for number of hours buttons
	 * @param number
	 */
	public changeHours(number: number) {
		this.numberOfHours = number;
	}

	/**
	 * Destroy subscriptions
	 */
	public ngOnDestroy() {
		this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
	}
}
