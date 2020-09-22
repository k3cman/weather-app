import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperaturePipe } from './temperature/temperature.pipe';

/**
 * Module for declaration of core pipes for the app
 */
@NgModule({
	declarations: [TemperaturePipe],
	imports: [CommonModule],
	exports: [TemperaturePipe],
})
export class PipesModule {}
