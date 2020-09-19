import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapperComponent } from './card-wrapper.component';

@NgModule({
	declarations: [CardWrapperComponent],
	exports: [CardWrapperComponent],
	imports: [CommonModule],
})
export class CardWrapperModule {}
