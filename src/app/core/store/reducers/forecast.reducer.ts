import { createReducer, on } from '@ngrx/store';
import { getForecastSuccess } from '../actions/forecast.actions';
import { handleSavedState } from '../../../shared/utils/store/handleSavedState';

/**
 * Forecast reducer
 */

const forecastReducerDef = createReducer(
	{ selected: null, saved: [] },
	on(getForecastSuccess, (state, props) => {
		return {
			...state,
			selected: {
				...props.data,
			},
			saved: handleSavedState(state, props),
		};
	})
);

export const forecastReducer = (state, action) => forecastReducerDef(state, action);
