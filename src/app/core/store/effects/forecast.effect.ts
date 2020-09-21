import { Injectable } from '@angular/core';
import { WeatherService } from '../../http/weather/weather.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getForecast, getForecastSuccess } from '../actions/forecast.actions';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setSelected } from '../actions/user-interface.actions';
import { of } from 'rxjs';

@Injectable()
export class ForecastEffect {
	public getForecast$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getForecast),
			withLatestFrom(this.store),
			switchMap(([{ lon, lat, id }, store]) => {
				this.store.dispatch(setSelected({ data: { lat, lon, id } }));
				const savedElement = store.selectedForecast.saved.filter((e) => e.id === id);
				if (savedElement && new Date(savedElement.updated).getHours() === new Date().getHours()) {
					return of(getForecastSuccess({ data: savedElement, save: false }));
				} else {
					return this.service.getForecastForCity(lat, lon).pipe(
						map((data) =>
							getForecastSuccess({
								data: {
									...data,
									id,
									updated: new Date().toISOString(),
								},
								save: true,
							})
						)
					);
				}
			})
		)
	);
	constructor(private service: WeatherService, private actions$: Actions, private store: Store<any>) {}
}
