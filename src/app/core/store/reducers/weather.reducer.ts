import { createReducer, on } from '@ngrx/store';
import { getCurrentWeatherSuccess } from '../actions/weather.actions';

export const weatherReducerDef = createReducer(
	null,
	on(getCurrentWeatherSuccess, (state, props) => {
		return {
			...state,
			currentWeather: props.data,
		};
	})
);

export const weatherReducer = (state, action) => weatherReducerDef(state, action);
