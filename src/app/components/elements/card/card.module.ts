import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [CommonModule, FontAwesomeModule],
})
export class CardModule {}
