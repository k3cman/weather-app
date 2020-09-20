import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/models/app.state';
import { selectCurrentForecast } from '../../../core/store/selectors/forecast.selector';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'card-details',
	templateUrl: './card-details.component.html',
	styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
	@Output() public readonly close: EventEmitter<void> = new EventEmitter<void>();

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.store
			.select(selectCurrentForecast)
			.pipe(filter((e) => !!e))
			.subscribe((val) => console.log(val));
	}
}
