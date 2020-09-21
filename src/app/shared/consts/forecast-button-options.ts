import { ForecastType } from '../models/enums/forecast-type.enum';

/**
 * Array of buttons for switching between Temperature and wind chart in the card details.
 */
export const FORECAST_BUTTON_OPTIONS = [
	{
		value: ForecastType.TEMPERATURE,
		title: 'Temperature',
	},
	{
		value: ForecastType.WIND,
		title: 'Wind',
	},
];
