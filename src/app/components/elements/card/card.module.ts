import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PipesModule } from '../../../core/pipes/pipes.module/pipes.module';

@NgModule({
	declarations: [CardComponent],
	exports: [CardComponent],
	imports: [CommonModule, FontAwesomeModule, PipesModule],
})
export class CardModule {}
