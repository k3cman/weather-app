import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast.component';
import { LineChartModule } from '@swimlane/ngx-charts';

@NgModule({
	declarations: [ForecastComponent],
	imports: [CommonModule, LineChartModule],
	exports: [ForecastComponent],
})
export class ForecastModule {}
