import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from './shared/components/card/card.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './modules/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {weatherReducer} from "./core/store/reducers/weather.reducer";
import {environment} from "../environments/environment";

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {WeatherEffect} from "./core/store/effects/weather.effect";

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
		StoreModule.forRoot({weather: weatherReducer}),
		EffectsModule.forRoot([WeatherEffect]),
		!environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
