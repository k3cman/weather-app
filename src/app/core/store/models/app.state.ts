import { CurrentWeather } from '../../../shared/models/weather/current-weather.class';
import { ForecastState } from './forecast.state';
import { UserInterfaceState } from './user-interface.state';

export interface AppState {
	// Store current weather data
	currentWeather: CurrentWeather[];
	// Forecast data
	selectedForecast: ForecastState;
	// UI data
	userInterface: UserInterfaceState;
}
