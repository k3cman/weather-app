import { Place } from './place.class';
import { Wind } from './wind.class';
import { Coordinates } from './coordinates.model';
import { Temperature } from './temperature.model';

/**
 * DTO for current weather of a single Location
 */
export class CurrentWeather {
	place: Place;
	cord: Coordinates;
	weather: {
		temperature: Temperature;
		wind: Wind;
		humidity: number;
		pressure: number;
		status: string;
		icon: string;
	};
	day: {
		sunrise: number;
		sunset: number;
	};
}
