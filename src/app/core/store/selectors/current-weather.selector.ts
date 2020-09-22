import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrentWeather } from '../../../shared/models/weather/current-weather.class';

/**
 * Current weather selectors
 */

export const selectCurrentWeatherState = createFeatureSelector<CurrentWeather[]>('currentWeather');

export const selectCurrentWeather = createSelector(selectCurrentWeatherState, (state) => state);
