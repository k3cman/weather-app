import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectForecastState = createFeatureSelector<any>('selectedForecast');

export const selectCurrentForecast = createSelector(selectForecastState, (state) => state?.selected);
export const selectSavedForecast = createSelector(selectForecastState, (state) => state?.saved);
