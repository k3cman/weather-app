import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CurrentWeather } from '../../models/weather/current-weather.class';
import {faCloud, faCloudRain, faThermometerFull, faThermometerHalf, faWind} from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../../../core/http/weather/weather.service';

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
export class CardComponent implements OnInit {
	@Input() public weatherData: CurrentWeather;
	@Input() public set collapsed(val: CardState) {
		this.state = val;
	}
	public state: CardState = CardState.STANDARD;
	public cardState = CardState;
	public windIcon = faWind;
	public thermometherIcon = faThermometerHalf;
	public thermometherFull = faThermometerFull;
	public cloudIcon = faCloudRain;
	public cloudIcon2 = faCloud;

	constructor(private service: WeatherService) {}

	ngOnInit(): void {}
}
