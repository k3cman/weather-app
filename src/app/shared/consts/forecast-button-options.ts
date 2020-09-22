import { ForecastType } from '../models/enums/forecast-type.enum';
import { ButtonValue } from '../models/elements/button-values.model';

/**
 * Array of buttons for switching between Temperature and wind chart in the card details.
 */
export const FORECAST_BUTTON_OPTIONS: ButtonValue[] = [
	{
		value: ForecastType.TEMPERATURE,
		title: 'Temperature',
	},
	{
		value: ForecastType.WIND,
		title: 'Wind',
	},
];
