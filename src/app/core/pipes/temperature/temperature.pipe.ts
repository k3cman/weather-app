import { Pipe, PipeTransform } from '@angular/core';

/**
 * Temperature pipe
 * Ceils the value and adds degrees symbol
 */
@Pipe({
	name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
	transform(value: number, ...args: unknown[]): unknown {
		return Math.ceil(value) + '°';
	}
}
