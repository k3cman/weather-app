import { ForecastType } from '../enums/forecast-type.enum';

/**
 * Model for rendering multiple buttons with ngFor
 */
export interface ButtonValue {
	value: ForecastType | number;
	title: string;
}
