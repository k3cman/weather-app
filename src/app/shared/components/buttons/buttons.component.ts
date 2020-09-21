import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimeOfDay } from '../../models/enums/time-of-day.enum';

@Component({
	selector: 'buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent implements OnInit {
	@Input() public buttons: any;
	@Input() public active: any;
	@Input() public timeOfDay: TimeOfDay;
	@Output() private readonly selected: EventEmitter<any> = new EventEmitter<any>();

	constructor() {}

	ngOnInit(): void {}

	onButtonClick(value: any) {
		this.selected.emit(value);
	}
}
