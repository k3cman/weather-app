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
		this.getCurrentIcon(data.weather.icon);
	}

	private getCurrentIcon(icon) {
		switch (icon) {
			case '01d':
			case '01n':
				this.currentWeatherIcon = faSun;
				break;
			case '02d':
			case '02n':
				this.currentWeatherIcon = faCloudSun;
				break;
			case '03d':
			case '03n':
			case '04d':
			case '04n':
				this.currentWeatherIcon = faCloud;
				break;
			case '09d':
			case '09n':
			case '10d':
			case '10n':
				this.currentWeatherIcon = faCloudRain;
				break;
			case '11d':
			case '11n':
				this.currentWeatherIcon = faBolt;
				break;
			case '13d':
			case '13n':
				this.currentWeatherIcon = faSnowflake;
				break;
			case '50d':
			case '50n':
				this.currentWeatherIcon = faSmog;
				break;
		}
	}
}
