import { createReducer, on } from '@ngrx/store';
import { setSelected } from '../actions/user-interface.actions';

const UIReducerDef = createReducer(
	null,
	on(setSelected, (state, props) => ({
		...state,
		selected: props.data,
	}))
);

export const UIReducer = (state, actions) => UIReducerDef(state, actions);
