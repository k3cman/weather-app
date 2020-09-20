import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperaturePipe } from './temperature/temperature.pipe';

@NgModule({
	declarations: [TemperaturePipe],
	imports: [CommonModule],
	exports: [TemperaturePipe],
})
export class PipesModule {}
