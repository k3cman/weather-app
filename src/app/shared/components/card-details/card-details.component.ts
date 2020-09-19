import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'card-details',
	templateUrl: './card-details.component.html',
	styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
	@Output() public readonly close: EventEmitter<void> = new EventEmitter<void>();

	constructor() {}

	ngOnInit(): void {}
}
