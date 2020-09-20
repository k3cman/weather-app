import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectForecastState = createFeatureSelector<any>('selectedForecast');

export const selectCurrentForecast = createSelector(selectForecastState, (state) => state?.selected);
