import { Injectable } from '@angular/core';
import { WeatherService } from '../../http/weather/weather.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getForecast, getForecastSuccess } from '../actions/forecast.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class ForecastEffect {
	public getForecast$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getForecast),
			switchMap(({ lat, lon }) =>
				this.service.getForecastForCity(lat, lon).pipe(map((data) => getForecastSuccess({ data })))
			)
		)
	);
	constructor(private service: WeatherService, private actions$: Actions) {}
}
