import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CardModule } from '../../shared/components/card/card.module';

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, CardModule],
	exports: [HomeComponent],
})
export class HomeModule {}
