import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CurrentWeather } from '../../../models/weather/current-weather.class';
import { faCloudRain, faThermometerFull, faThermometerHalf, faWind } from '@fortawesome/free-solid-svg-icons';

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
export class CardComponent implements OnInit, OnChanges {
	@Input() public weatherData: CurrentWeather;
	@Input() public collapsed: CardState = CardState.STANDARD;
	public cardState = CardState;
	public windIcon = faWind;
	public thermometherIcon = faThermometerHalf;
	public thermometherFull = faThermometerFull;
	public cloudIcon = faCloudRain;

	constructor() {}

	ngOnInit(): void {}

	public ngOnChanges(changes: SimpleChanges) {
		if (changes.collapsed) {
			console.log(this.collapsed);
		}
	}
}
