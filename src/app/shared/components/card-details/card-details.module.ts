import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from './card-details.component';

@NgModule({
	declarations: [CardDetailsComponent],
	exports: [CardDetailsComponent],
	imports: [CommonModule],
})
export class CardDetailsModule {}
