import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/models/app.state';
import { selectCurrentForecast } from '../../../../core/store/selectors/forecast.selector';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import * as shape from 'd3-shape';
@Component({
	selector: 'card-details',
	templateUrl: './card-details.component.html',
	styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
	@Output() public readonly close: EventEmitter<void> = new EventEmitter<void>();
	private _chartData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
	public chartData$ = this._chartData$.asObservable();
	constructor(private store: Store<AppState>) {}

	curve = shape.curveMonotoneX;
	ngOnInit(): void {
		this.store
			.select(selectCurrentForecast)
			.pipe(filter((e) => !!e))
			.subscribe((val) => {
				const hourly: any[] = val.hourly;
				const nextHours = hourly.slice(0, 10);

				const data = nextHours.map((element) => {
					return {
						name: new Date(element.dt * 1000).getHours().toString(),
						value: Math.ceil(element.temp),
					};
				});

				this._chartData$.next([
					{
						name: 'Temperature',
						series: [...data],
					},
				]);
			});
	}
}
