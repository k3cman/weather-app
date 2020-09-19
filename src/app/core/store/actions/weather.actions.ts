import { createAction, props } from '@ngrx/store';
import {CurrentWeather} from "../../../shared/models/weather/current-weather.class";


enum WeatherActionsTypes {
	GET_CURRENT = '[Weather] Get current weather',
	GET_CURRENT_SUCCESS = '[Weather] Get current weather Success',
	GET_PLACE_FORECAST = '[Weather] Get place forecast',
	GET_PLACE_FORECAST_SUCCESS = '[Weather] Get place forecast Success',
}

export const getCurrentWeather = createAction(WeatherActionsTypes.GET_CURRENT);
export const getCurrentWeatherSuccess = createAction(WeatherActionsTypes.GET_CURRENT_SUCCESS, props<{data: CurrentWeather[]}>());
export const getPlaceForecast = createAction(WeatherActionsTypes.GET_PLACE_FORECAST, props<{data: {lon: number, lat: number}}>());
export const getPlaceFOrecastSuccess = createAction(WeatherActionsTypes.GET_PLACE_FORECAST_SUCCESS, props<{data: any}>())
