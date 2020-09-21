import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastChartComponent } from './forecast-chart.component';
import { LineChartModule } from '@swimlane/ngx-charts';

@NgModule({
	declarations: [ForecastChartComponent],
	imports: [CommonModule, LineChartModule],
	exports: [ForecastChartComponent],
})
export class ForecastChartModule {}
