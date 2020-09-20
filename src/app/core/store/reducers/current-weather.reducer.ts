import { createReducer, on } from '@ngrx/store';
import { getCurrentWeatherSuccess } from '../actions/current-weather.actions';

export const currentWeatherReducerDef = createReducer(
	null,
	on(getCurrentWeatherSuccess, (state, props) => {
		return [...props.data];
	})
);

export const currentWeatherReducer = (state, action) => currentWeatherReducerDef(state, action);
