import { CurrentWeather } from '../../../shared/models/weather/current-weather.class';

export interface AppState {
	// Store current weather data
	currentWeather: CurrentWeather[];
	// Store
	selected: any;
	// Cached data
	forecasts: any[];
	// Loading indicator
	userInterface: any;
}