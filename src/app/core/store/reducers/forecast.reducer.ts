import { createReducer, on } from '@ngrx/store';
import { getForecastSuccess } from '../actions/forecast.actions';

const forecastReducerDef = createReducer(
	{ selected: null, updated: null },
	on(getForecastSuccess, (state, props) => {
		return {
			...state,
			selected: props.data,
			updated: new Date().toTimeString(),
		};
	})
);

export const forecastReducer = (state, action) => forecastReducerDef(state, action);
