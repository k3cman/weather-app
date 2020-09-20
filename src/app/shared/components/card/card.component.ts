import { Component, Input } from '@angular/core';
import { CurrentWeather } from '../../models/weather/current-weather.class';

export enum CardState {
	CLOSED = 'closed',
	STANDARD = 'standard',
	EXPANDED = 'expanded',
}

@Component({
	selector: 'card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent {
	@Input() public weatherData: CurrentWeather;
}
