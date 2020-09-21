import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastChartComponent } from './forecast-chart.component';
import { LineChartModule } from '@swimlane/ngx-charts';

/**
 * ForecastChartModule
 * Used for declaration of Chart component for showing up the forecast chart
 */
@NgModule({
	declarations: [ForecastChartComponent],
	imports: [CommonModule, LineChartModule],
	exports: [ForecastChartComponent],
})
export class ForecastChartModule {}
