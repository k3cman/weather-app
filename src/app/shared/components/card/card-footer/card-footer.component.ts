import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CurrentWeather } from '../../../models/weather/current-weather.class';
import {
	faBolt,
	faCloud,
	faCloudRain,
	faCloudSun,
	faSmog,
	faSnowflake,
	faSun,
	faThermometerHalf,
	faWind,
} from '@fortawesome/free-solid-svg-icons';
import { getIcon } from '../../../utils/get-icon';

@Component({
	selector: 'card-footer',
	templateUrl: './card-footer.component.html',
	styleUrls: ['./card-footer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFooterComponent {
	@Input() set weatherData(data: CurrentWeather) {
		this.generateData(data);
	}
	public data: CurrentWeather;
	public currentWeatherIcon = faSun;
	// icons
	public windIcon = faWind;
	public thermometherIcon = faThermometerHalf;

	private generateData(data: CurrentWeather) {
		this.data = data;
		this.currentWeatherIcon = getIcon(data.weather.icon);
	}
}
