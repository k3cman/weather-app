import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PipesModule } from '../../../core/pipes/pipes.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardClosedComponent } from './card-closed/card-closed.component';
import { CardFooterComponent } from './card-footer/card-footer.component';

@NgModule({
	declarations: [CardComponent, CardDetailsComponent, CardClosedComponent, CardFooterComponent],
	exports: [CardComponent, CardDetailsComponent, CardClosedComponent],
	imports: [CommonModule, FontAwesomeModule, PipesModule, NgxChartsModule],
})
export class CardModule {}
