import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducers } from './root-reducers';
import { WeatherEffect } from './effects/weather.effect';

@NgModule({
	imports: [
		StoreModule.forRoot(rootReducers, {
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: false,
				strictStateSerializability: true,
				strictActionSerializability: false,
			},
		}),
		EffectsModule.forRoot([WeatherEffect]),

		!environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
	],
})
export class RootStoreModule {}
