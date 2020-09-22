import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PipesModule } from '../../../core/pipes/pipes.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardClosedComponent } from './card-closed/card-closed.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { ForecastChartModule } from '../forecast-chart/forecast-chart.module';
import { LoaderModule } from '../loader/loader.module';

/**
 * Module for declaration of all Card components
 */
@NgModule({
	declarations: [CardComponent, CardDetailsComponent, CardClosedComponent, CardFooterComponent],
	exports: [CardComponent, CardDetailsComponent, CardClosedComponent],
	imports: [
		CommonModule,
		FontAwesomeModule,
		PipesModule,
		NgxChartsModule,
		ForecastChartModule,
		ButtonsModule,
		LoaderModule,
	],
})
export class CardModule {}
