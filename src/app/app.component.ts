import { Component, OnDestroy } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CurrentWeather } from './models/weather/current-weather.class';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public currentWeather$: Observable<CurrentWeather[]> = this.weatherService.getCurrentWeather();

    constructor(private weatherService: WeatherService) {
        this.currentWeather$.subscribe((val) => console.log(val));
    }

    test(currentWeathers) {
        console.log(currentWeathers);
    }
}
