import { Forecast } from '../../../shared/models/weather/forecast.model';

/**
 * Forecast state interface
 */
export interface ForecastState {
	selected: Forecast;
	saved: Forecast[];
}
