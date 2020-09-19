import { Place } from './place.class';
import { Wind } from './wind.class';
import { Coordinates } from './coordinates.model';
import { Temperature } from './temperature.model';

export class CurrentWeather {
	place: Place;
	cord: Coordinates;
	weather: {
		temperature: Temperature;
		wind: Wind;
		humidity: number;
		pressure: number;
		status: string;
	};
}
