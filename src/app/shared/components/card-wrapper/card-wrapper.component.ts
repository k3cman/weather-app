import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CardState } from '../card/card.component';

@Component({
	selector: 'card-wrapper',
	templateUrl: './card-wrapper.component.html',
	styleUrls: ['./card-wrapper.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardWrapperComponent implements OnInit {
	@Input() set card(state: CardState | null) {
		if (state === null) {
			this._state = CardState.STANDARD;
		} else {
			this._state = state;
		}
	}
	public _state = CardState.STANDARD;
	public cardState = CardState;

	constructor() {}

	ngOnInit(): void {}
}
