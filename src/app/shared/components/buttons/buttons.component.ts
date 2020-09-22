import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimeOfDay } from '../../models/enums/time-of-day.enum';

@Component({
	selector: 'buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {
	@Input() public buttons: any = [];
	@Input() public active: any = false;
	@Input() public timeOfDay: TimeOfDay = TimeOfDay.DAY;
	@Output() public readonly selected: EventEmitter<any> = new EventEmitter<any>();

	onButtonClick(value: any) {
		this.selected.emit(value);
	}
}
