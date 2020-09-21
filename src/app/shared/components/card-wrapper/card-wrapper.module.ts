import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapperComponent } from './card-wrapper.component';
import { CardModule } from '../card/card.module';

/**
 * Module for declaration of CardWrapperComponent
 */
@NgModule({
	declarations: [CardWrapperComponent],
	exports: [CardWrapperComponent],
	imports: [CommonModule, CardModule],
})
export class CardWrapperModule {}
