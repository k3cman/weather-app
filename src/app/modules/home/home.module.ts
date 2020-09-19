import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CardModule } from '../../shared/components/card/card.module';
import { LineChartModule } from '@swimlane/ngx-charts';

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, CardModule, LineChartModule],
	exports: [HomeComponent],
})
export class HomeModule {}
