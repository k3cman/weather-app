import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Coordinates } from '../../models/weather/coordinates.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/models/app.state';
import { getUISelected } from '../../../core/store/selectors/user-interface.selector';
import { filter } from 'rxjs/operators';
import { CurrentWeather } from '../../models/weather/current-weather.class';
import { clearSelected } from '../../../core/store/actions/user-interface.actions';
import { TimeOfDay } from '../../models/enums/time-of-day.enum';
import { CardState } from '../../models/enums/card-state.enum';
import { growAnimation } from '../../animations/grow.animation';

/**
 * CardWrapper Component
 * Responsible for managing display of single location elements
 * Handles showing and hiding close/standard or open card with current weather and forecast
 */
@Component({
	selector: 'card-wrapper',
	templateUrl: './card-wrapper.component.html',
	styleUrls: ['./card-wrapper.component.scss'],
	animations: [growAnimation],
})
export class CardWrapperComponent {
	// Initialize default cardState
	public currentState = CardState.STANDARD;
	// Used for casting CardState enum to html
	public cardState = CardState;
	// Used for comparing with store and changing card state of the place
	public id: string;
	// Store selector to get what is the current selected element to show for forecast
	// If its null all cardWrapper instances will have STANDARD card state
	// If its not null, all cards will have CLOSED state , except the one which location id is the same as the store selected item id
	public selectedElement$ = this.store.select(getUISelected);
	// Used for passing to other components so they can change their UI according to day or night time
	public timeOfDay: TimeOfDay;
	// used for storing data got from parent element for current weather of a single location
	private data: CurrentWeather;

	/**
	 * Setter for CurrentWeather of single location and initialize function for determining TimeOfTheDay
	 * @param value: CurrentWeather
	 */
	@Input() public set place(value: CurrentWeather) {
		this.data = value;
		this.setTimeOfDay();
	}

	/**
	 * Getter for Current weather
	 */
	public get place() {
		return this.data;
	}

	/**
	 * Initializer for whic card should be closed and wich should be open
	 * @param value
	 */
	@Input() set cords(value: { cords: Coordinates; id: string }) {
		this.initListener();
		this.id = value.id;
	}

	/**
	 * Host Binding used to manipulate width of all cards when one card is open
	 */
	@HostBinding('class.expanded-card') expandedClass: boolean = false;
	/**
	 * Emitter for when the card is clicked
	 */
	@Output() public readonly openDetails: EventEmitter<CurrentWeather> = new EventEmitter<CurrentWeather>();

	constructor(private store: Store<AppState>) {}

	/**
	 * Listener that determins should all cards be Standard state, or if one of them should be open and other closed
	 * Also it asssigns value to Host Binding for expanded class for OPEN state
	 * @private
	 */
	private initListener() {
		this.selectedElement$.pipe(filter((e) => e !== undefined)).subscribe((res) => {
			if (res === null) {
				this.currentState = CardState.STANDARD;
				this.expandedClass = false;
			} else {
				this.currentState = res.id === this.id ? CardState.EXPANDED : CardState.CLOSED;
				this.expandedClass = res.id === this.id;
			}
		});
	}

	/**
	 * Function that either opens or closes the details depending on the current state
	 */
	public handleCardClick() {
		if (this.expandedClass) {
			this.close();
		} else {
			this.openDetails.emit(this.place);
		}
	}

	/**
	 * Function for dispatching action to clear Store selected item in order to return all cards to STANDARD view
	 */
	public close() {
		this.store.dispatch(clearSelected());
	}

	/**
	 * Function for determining time of the day
	 * @private
	 */
	private setTimeOfDay() {
		const sunRise = new Date(this.place.day.sunrise).getHours();
		const sunSet = new Date(this.place.day.sunset).getHours();
		const currentHour = new Date().getHours();
		if (sunRise < currentHour && currentHour < sunSet) {
			this.timeOfDay = TimeOfDay.DAY;
		} else {
			this.timeOfDay = TimeOfDay.NIGHT;
		}
	}
}
