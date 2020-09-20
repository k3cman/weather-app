import { currentWeatherReducer } from './reducers/current-weather.reducer';
import { forecastReducer } from './reducers/forecast.reducer';
import { UIReducer } from './reducers/user-interface.reducer';

export const rootReducers = {
	currentWeather: currentWeatherReducer,
	selectedForecast: forecastReducer,
	userInterface: UIReducer,
};
