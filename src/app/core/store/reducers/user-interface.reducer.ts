import { createReducer, on } from '@ngrx/store';
import { clearSelected, setSelected } from '../actions/user-interface.actions';

const UIReducerDef = createReducer(
	null,
	on(setSelected, (state, props) => ({
		...state,
		selected: props.data,
	})),
	on(clearSelected, (state) => ({
		...state,
		selected: null,
	}))
);

export const UIReducer = (state, actions) => UIReducerDef(state, actions);
