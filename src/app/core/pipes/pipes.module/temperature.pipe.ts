import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
	transform(value: number, ...args: unknown[]): unknown {
		return Math.ceil(value) + '°';
	}
}
