import { createReducer, on } from '@ngrx/store';
import { getForecastSuccess } from '../actions/forecast.actions';

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

const handleSavedState = (state, props) => {
	if (!props.save) {
		return [...state.saved];
	} else {
		let savedState = [...state.saved];
		const savedIndex = state.saved.findIndex((el) => el.id === props.data.id);
		if (savedIndex >= 0) {
			savedState[savedIndex] = { ...props.data };
		} else {
			savedState = [...savedState, props.data];
		}

		return savedState;
	}
};
