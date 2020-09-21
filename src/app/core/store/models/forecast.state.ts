import { Forecast } from '../../../shared/models/weather/forecast.model';

export interface ForecastState {
	selected: Forecast;
	saved: Forecast[];
}
