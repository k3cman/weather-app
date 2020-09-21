import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapperComponent } from './card-wrapper.component';
import { CardModule } from '../card/card.module';

@NgModule({
	declarations: [CardWrapperComponent],
	exports: [CardWrapperComponent],
	imports: [CommonModule, CardModule],
})
export class CardWrapperModule {}
