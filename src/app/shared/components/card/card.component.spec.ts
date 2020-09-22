import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PipesModule } from '../../../core/pipes/pipes.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ForecastChartModule } from '../forecast-chart/forecast-chart.module';
import { ButtonsModule } from '../buttons/buttons.module';
import { LoaderModule } from '../loader/loader.module';
import { ChangeDetectionStrategy } from '@angular/core';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardClosedComponent } from './card-closed/card-closed.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { currentPlaceForTest } from '../../utils/testing';
import { TimeOfDay } from '../../models/enums/time-of-day.enum';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
	let component: CardComponent;
	let fixture: ComponentFixture<CardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CardComponent, CardDetailsComponent, CardClosedComponent, CardFooterComponent],
			imports: [
				CommonModule,
				FontAwesomeModule,
				PipesModule,
				NgxChartsModule,
				ForecastChartModule,
				ButtonsModule,
				LoaderModule,
			],
		})
			.overrideComponent(CardComponent, {
				set: { changeDetection: ChangeDetectionStrategy.Default },
			})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CardComponent);
		component = fixture.componentInstance;
		component.weatherData = currentPlaceForTest;
		component.timeOfDay = TimeOfDay.DAY;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have all child components', async(() => {
		fixture.whenStable().then(() => {
			const cityLabel = fixture.debugElement.query(By.css('.city')).nativeElement;
			expect(cityLabel.textContent).toBe(' Munich ');
			const temperatureValue = fixture.debugElement.query(By.css('.temperature')).nativeElement;
			expect(temperatureValue.textContent).toBe(' 25° ');
			const cardFooter = fixture.debugElement.query(By.css('card-footer')).nativeElement;
			expect(cardFooter).toBeTruthy();
		});
	}));
});
