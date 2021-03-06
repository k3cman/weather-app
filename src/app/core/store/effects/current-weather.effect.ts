import { Injectable } from '@angular/core';
import { WeatherService } from '../../http/weather/weather.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getCurrentWeather, getCurrentWeatherSuccess } from '../actions/current-weather.actions';
import { map, switchMap } from 'rxjs/operators';

/**
 * Effect for getting current weather conditions
 */
@Injectable()
export class CurrentWeatherEffect {
	/* Effect that Catches getCurrentWeather action , send http request, and dispatch Success action */
	public getCurrent$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getCurrentWeather),
			switchMap(() => this.service.getCurrentWeather().pipe(map((data) => getCurrentWeatherSuccess({ data }))))
		)
	);

	constructor(private service: WeatherService, private actions$: Actions) {}
}
