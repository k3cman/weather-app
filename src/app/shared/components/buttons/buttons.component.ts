import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeOfDay } from '../../models/enums/time-of-day.enum';
import { ButtonValue } from '../../models/elements/button-values.model';
import { ForecastType } from '../../models/enums/forecast-type.enum';
import { trackByIndex } from '../../utils/trackBy';

/**
 * Component for rendering multiple buttons
 */
@Component({
	selector: 'buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {
	// Times of day
	public timesOfDay = TimeOfDay;
	// Function for NgFor trackBy
	public trackBy = trackByIndex;
	/**
	 * Buttons array
	 */
	@Input() public buttons: ButtonValue[] = [];
	/**
	 * Active button input
	 */
	@Input() public active: ForecastType | number;
	/**
	 * Time of day for manipulatin styles between day and night
	 */
	@Input() public timeOfDay: TimeOfDay = TimeOfDay.DAY;

	/**
	 * Emitter for when the button is clicked
	 */
	@Output() public readonly selected: EventEmitter<ForecastType | number> = new EventEmitter<ForecastType | number>();

	/**
	 * Event handler for click on single button
	 * @param value
	 */
	public onButtonClick(value: ForecastType | number) {
		this.selected.emit(value);
	}
}
