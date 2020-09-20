import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
	@Input() public buttons: any;
	@Input() public active: any;
	@Output() private readonly selected: EventEmitter<any> = new EventEmitter<any>();

	constructor() {}

	ngOnInit(): void {}

	onButtonClick(value: any) {
		this.selected.emit(value);
	}
}
