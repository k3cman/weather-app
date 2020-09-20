import { currentWeatherReducer } from './reducers/current-weather.reducer';
import { forecastReducer } from './reducers/forecast.reducer';

export const rootReducers = {
	currentWeather: currentWeatherReducer,
	selectedForecast: forecastReducer,
};
