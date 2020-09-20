import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from '../../../models/weather/current-weather.class';

@Component({
	selector: 'card-closed',
	templateUrl: './card-closed.component.html',
	styleUrls: ['./card-closed.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardClosedComponent implements OnInit {
	@Input() public weatherData: CurrentWeather;
	constructor() {}

	ngOnInit(): void {}
}
