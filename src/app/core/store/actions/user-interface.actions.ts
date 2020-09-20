import { createAction, props } from '@ngrx/store';

enum UserInterfaceActionsTypes {
	SET_SELECTED = '[UI] Set selected',
	CLEAR_SELECTED = '[UI] Clear selected',
}

export const setSelected = createAction(
	UserInterfaceActionsTypes.SET_SELECTED,
	props<{ data: { id: string; lon: number; lat: number } }>()
);
export const clearSelected = createAction(UserInterfaceActionsTypes.CLEAR_SELECTED);
