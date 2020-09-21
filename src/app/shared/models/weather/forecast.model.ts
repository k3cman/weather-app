import { HourlyForecast } from './hourly-forecast.model';

export class Forecast {
	lat: number;
	lon: number;
	id: string;
	timezone: string;
	updated: string;
	timezone_offset: string;
	hourly: HourlyForecast[];
}
