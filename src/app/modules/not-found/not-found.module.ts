import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './pages/error/error.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ErrorComponent],
	imports: [RouterModule, CommonModule],
	exports: [ErrorComponent],
})
export class NotFoundModule {}
