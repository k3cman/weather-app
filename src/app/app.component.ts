import { Component, OnDestroy } from '@angular/core';
import { WeatherService } from './core/http/weather/weather.service';
import { CurrentWeather } from './shared/models/weather/current-weather.class';
import { Observable } from 'rxjs';
import { CardState } from './shared/components/card/card.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
