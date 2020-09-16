import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from '../../../models/weather/current-weather.class';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() public weatherData: CurrentWeather;

    constructor() {}

    ngOnInit(): void {}
}
