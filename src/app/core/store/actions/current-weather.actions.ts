import { createAction, props } from '@ngrx/store';
import { CurrentWeather } from '../../../shared/models/weather/current-weather.class';

/**
 * Enum for declaration of action types
 */
enum WeatherActionsTypes {
	GET_CURRENT = '[Weather] Get current weather',
	GET_CURRENT_SUCCESS = '[Weather] Get current weather Success',
}

/* Action for triggering effect for getting current weather for 5 cities */
export const getCurrentWeather = createAction(WeatherActionsTypes.GET_CURRENT);
/* Action for setting store state when http request is done */
export const getCurrentWeatherSuccess = createAction(
	WeatherActionsTypes.GET_CURRENT_SUCCESS,
	props<{ data: CurrentWeather[] }>()
);
