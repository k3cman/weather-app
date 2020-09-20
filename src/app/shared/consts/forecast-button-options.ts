import { ForecastType } from '../models/enums/forecast-type.enum';

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
