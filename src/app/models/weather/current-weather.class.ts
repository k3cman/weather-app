import { Place } from './place.class';
import { Wind } from './wind.class';

export class CurrentWeather {
    place: Place;
    humidity: number;
    pressure: number;
    temperature: number;
    min: number;
    max: number;
    status: string;
    wind: Wind;
}
