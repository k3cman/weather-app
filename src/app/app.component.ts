import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CurrentWeather } from './models/weather/current-weather.class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'weather-app';
    constructor(private weatherService: WeatherService) {
        this.weatherService.getCurrentWeather().subscribe((val: CurrentWeather) => console.log(val));
    }
}
