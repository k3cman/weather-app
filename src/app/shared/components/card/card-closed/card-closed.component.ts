import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CurrentWeather } from '../../../models/weather/current-weather.class';

/**
 * Closed card component
 * shows only city name and temperature
 */
@Component({
	selector: 'card-closed',
	templateUrl: './card-closed.component.html',
	styleUrls: ['./card-closed.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardClosedComponent {
	/**
	 * Data for displaying
	 */
	@Input() public weatherData: CurrentWeather;
}
