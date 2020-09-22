import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeOfDay } from '../../models/enums/time-of-day.enum';
import { ButtonValue } from '../../models/elements/button-values.model';
import { ForecastType } from '../../models/enums/forecast-type.enum';

@Component({
	selector: 'buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {
	@Input() public buttons: ButtonValue[] = [];
	@Input() public active: ForecastType | number;
	@Input() public timeOfDay: TimeOfDay = TimeOfDay.DAY;
	@Output() public readonly selected: EventEmitter<ForecastType | number> = new EventEmitter<ForecastType | number>();

	onButtonClick(value: ForecastType | number) {
		this.selected.emit(value);
	}
}
