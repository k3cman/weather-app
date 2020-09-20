import { createAction, props } from '@ngrx/store';
import { CurrentWeather } from '../../../shared/models/weather/current-weather.class';

enum WeatherActionsTypes {
	GET_CURRENT = '[Weather] Get current weather',
	GET_CURRENT_SUCCESS = '[Weather] Get current weather Success',
}

export const getCurrentWeather = createAction(WeatherActionsTypes.GET_CURRENT);
export const getCurrentWeatherSuccess = createAction(
	WeatherActionsTypes.GET_CURRENT_SUCCESS,
	props<{ data: CurrentWeather[] }>()
);
