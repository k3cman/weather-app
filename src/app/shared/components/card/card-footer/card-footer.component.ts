import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CurrentWeather } from '../../../models/weather/current-weather.class';
import { faSun, faThermometerHalf, faWind } from '@fortawesome/free-solid-svg-icons';
import { getIcon } from '../../../utils/get-icon';

/**
 * Card footer component for displaying current weather conditions
 * Status, average temperature and wind
 */
@Component({
	selector: 'card-footer',
	templateUrl: './card-footer.component.html',
	styleUrls: ['./card-footer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFooterComponent {
	/**
	 * Setter for getting data from parent and generating icon
	 * @param data
	 */
	@Input() set weatherData(data: CurrentWeather) {
		this.generateData(data);
	}

	/**
	 * Current weather data got from setter @Input()
	 */
	public data: CurrentWeather;
	/**
	 * DisplayedIcon that gets changed according to server response status
	 */
	public currentWeatherIcon = faSun;
	// Wind icon
	public windIcon = faWind;
	// Thermometer icon
	public thermometherIcon = faThermometerHalf;

	/**
	 * Method for setting data and getting icon from external function
	 * @param data
	 * @private
	 */
	private generateData(data: CurrentWeather) {
		this.data = data;
		this.currentWeatherIcon = getIcon(data.weather.icon);
	}
}
