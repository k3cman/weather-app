import { createAction, props } from '@ngrx/store';
/**
 * Enum for declaration of action types
 */
enum ForecastActionsTypes {
	GET_FORECAST = '[Forecast] Get Forecast for place',
	GET_FORECAST_SUCCESS = '[Forecast] Get Forecast for place Success',
}

/* Action for triggering effect for getting forecast for one location */
export const getForecast = createAction(
	ForecastActionsTypes.GET_FORECAST,
	props<{ lon: number; lat: number; id: string }>()
);
/* Action for setting store state when http request is done */
export const getForecastSuccess = createAction(
	ForecastActionsTypes.GET_FORECAST_SUCCESS,
	props<{ data: any; save: boolean }>()
);
