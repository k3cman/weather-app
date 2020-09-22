import { Injectable } from '@angular/core';
import { WeatherService } from '../../http/weather/weather.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getForecast, getForecastSuccess } from '../actions/forecast.actions';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setSelected } from '../actions/user-interface.actions';
import { of } from 'rxjs';

/**
 * Effect for getting forecast data from the server
 */
@Injectable()
export class ForecastEffect {
	/* Effect that Catches getForecast action
	 *  and determines if the current user time has changed since the last request towards the forecast endpoint
	 * if there is no change, and user already accessed the forecast, it will get the data from the store and show it to the user
	 * else it will send http request and return data from endpoint
	 * Then it dispatches Success action
	 */
	public getForecast$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getForecast),
			withLatestFrom(this.store),
			switchMap(([{ lon, lat, id }, store]) => {
				this.store.dispatch(setSelected({ data: { lat, lon, id } }));
				const savedElement = store.selectedForecast.saved.filter((e) => e.id === id);
				if (savedElement.length > 0 && new Date(savedElement[0].updated).getHours() === new Date().getHours()) {
					return of(getForecastSuccess({ data: savedElement[0], save: false }));
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
