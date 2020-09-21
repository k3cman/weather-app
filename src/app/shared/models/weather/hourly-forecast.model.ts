/**
 * DTO model containing data
 * for single hour forecast
 */
export class HourlyForecast {
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
}
