import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PipesModule } from '../../pipes/pipes.module/pipes.module';
import {NgxChartsModule} from "@swimlane/ngx-charts";

@NgModule({
	declarations: [CardComponent],
	exports: [CardComponent],
    imports: [CommonModule, FontAwesomeModule, PipesModule, NgxChartsModule],
})
export class CardModule {}
