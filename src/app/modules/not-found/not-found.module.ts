import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ErrorComponent } from './pages/error/error.component';



@NgModule({
  declarations: [NotFoundComponent, ErrorComponent],
  imports: [
    CommonModule
  ]
})
export class NotFoundModule { }
