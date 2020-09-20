import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectUIState = createFeatureSelector<any>('userInterface');

export const getUISelected = createSelector(selectUIState, (state) => state?.selected);
