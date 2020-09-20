import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CardModule } from '../../shared/components/card/card.module';
import { LineChartModule } from '@swimlane/ngx-charts';
import { CardWrapperModule } from '../../shared/components/card-wrapper/card-wrapper.module';
import { PipesModule } from '../../core/pipes/pipes.module';
import { CardDetailsModule } from '../../shared/components/card-details/card-details.module';

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, CardModule, LineChartModule, CardWrapperModule, PipesModule, CardDetailsModule],
	exports: [HomeComponent],
})
export class HomeModule {}
