import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';

/**
 * Loader Module
 * Used for declaring and exporting LoaderComponent
 */
@NgModule({
	declarations: [LoaderComponent],
	exports: [LoaderComponent],
	imports: [CommonModule],
})
export class LoaderModule {}
