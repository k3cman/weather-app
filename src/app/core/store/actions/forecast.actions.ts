import { createAction, props } from '@ngrx/store';

enum ForecastActionsTypes {
	GET_FORECAST = '[Forecast] Get Forecast for place',
	GET_FORECAST_SUCCESS = '[Forecast] Get Forecast for place Success',
}

export const getForecast = createAction(
	ForecastActionsTypes.GET_FORECAST,
	props<{ lon: number; lat: number; id: string }>()
);
export const getForecastSuccess = createAction(ForecastActionsTypes.GET_FORECAST_SUCCESS, props<{ data: any }>());
