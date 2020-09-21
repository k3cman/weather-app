import { HourlyForecast } from './hourly-forecast.model';

/**
 * DTO for grouping all hourly forecasts of one Location
 */
export class Forecast {
	lat: number;
	lon: number;
	id: string;
	timezone: string;
	updated: string;
	timezone_offset: string;
	hourly: HourlyForecast[];
}
