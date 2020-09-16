import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from '../../../models/weather/current-weather.class';
import { faCloudRain, faThermometerFull, faThermometerHalf, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() public weatherData: CurrentWeather;
    public windIcon = faWind;
    public thermometherIcon = faThermometerHalf;
    public thermometherFull = faThermometerFull;
    public cloudIcon = faCloudRain;

    constructor() {}

    ngOnInit(): void {}
}
