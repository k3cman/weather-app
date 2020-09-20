import { createReducer, on } from '@ngrx/store';
import { getForecast, getForecastSuccess } from '../actions/forecast.actions';

const forecastReducerDef = createReducer(
	null,
	on(getForecastSuccess, (state, props) => {
		console.log(state);
		return {
			...state,
			selected: props.data,
			updated: new Date().toTimeString(),
		};
	})
);

export const forecastReducer = (state, action) => forecastReducerDef(state, action);
