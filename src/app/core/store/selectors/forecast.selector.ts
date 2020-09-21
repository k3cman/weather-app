import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ForecastState } from '../models/forecast.state';

export const selectForecastState = createFeatureSelector<ForecastState>('selectedForecast');

export const selectCurrentForecast = createSelector(selectForecastState, (state) => state?.selected);
export const selectSavedForecast = createSelector(selectForecastState, (state) => state?.saved);
