import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from './shared/components/card/card.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './modules/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootStoreModule } from './core/store/root-store.module';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/models/app.state';
import { getCurrentWeather } from './core/store/actions/current-weather.actions';
import { LoaderModule } from './shared/components/loader/loader.module';

/**
 * Main Application module
 */
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		CardModule,
		FontAwesomeModule,
		HomeModule,
		BrowserAnimationsModule,
		RootStoreModule,
		LoaderModule,
	],
	providers: [
		// Used to get data on load of the app
		// Gets current weather for 5 defined locations
		{
			provide: APP_INITIALIZER,
			useFactory: (store: Store<AppState>) => {
				return () => {
					store.dispatch(getCurrentWeather());
				};
			},
			multi: true,
			deps: [Store],
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
