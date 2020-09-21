import { Component, Input } from '@angular/core';
import { CurrentWeather } from '../../models/weather/current-weather.class';
import { TimeOfDay } from '../../models/enums/time-of-day.enum';

@Component({
	selector: 'card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent {
	@Input() public weatherData: CurrentWeather;
	@Input() public timeOfDay: TimeOfDay;
}
