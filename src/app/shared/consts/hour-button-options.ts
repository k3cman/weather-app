/**
 * An array of options for user to select
 * Used to change number of hours of forecast-chart displayed
 */
import { ButtonValue } from '../models/elements/button-values.model';

export const HOUR_BUTTON_OPTIONS: ButtonValue[] = [
	{
		value: 8,
		title: '8h',
	},
	{
		value: 12,
		title: '12h',
	},
	{
		value: 24,
		title: '24h',
	},
];
