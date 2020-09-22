import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { ErrorComponent } from './modules/not-found/pages/error/error.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'error',
		component: ErrorComponent,
	},
	{
		path: '**',
		component: ErrorComponent,
	},
];

/**
 * Main App Routing module
 */
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
