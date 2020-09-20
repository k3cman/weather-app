import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CardState } from '../card/card.component';
import { Coordinates } from '../../models/weather/coordinates.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/models/app.state';
import { getUISelected } from '../../../core/store/selectors/user-interface.selector';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'card-wrapper',
	templateUrl: './card-wrapper.component.html',
	styleUrls: ['./card-wrapper.component.scss'],
})
export class CardWrapperComponent {
	public currentState = CardState.STANDARD;
	public cardState = CardState;

	public coordinates: Coordinates;
	public id: string;

	public selectedElement$ = this.store.select(getUISelected);

	@Input() set cords(value: { cords: Coordinates; id: string }) {
		this.initListener();
		this.coordinates = value.cords;
		this.id = value.id;
	}

	@HostBinding('class.expanded-card') expandedClass: boolean = false;

	constructor(private store: Store<AppState>) {}

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
}
