import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFooterComponent } from './card-footer.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PipesModule } from '../../../../core/pipes/pipes.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ForecastChartModule } from '../../forecast-chart/forecast-chart.module';
import { ButtonsModule } from '../../buttons/buttons.module';
import { LoaderModule } from '../../loader/loader.module';
import { ChangeDetectionStrategy } from '@angular/core';
import { currentPlaceForTest } from '../../../utils/testing';
import { By } from '@angular/platform-browser';

describe('CardFooterComponent', () => {
	let component: CardFooterComponent;
	let fixture: ComponentFixture<CardFooterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CardFooterComponent],
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
			.overrideComponent(CardFooterComponent, {
				set: { changeDetection: ChangeDetectionStrategy.Default },
			})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CardFooterComponent);
		component = fixture.componentInstance;
		component.weatherData = currentPlaceForTest;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should display weather status', async(() => {
		const statusTitle = fixture.debugElement.query(By.css('span')).nativeElement;
		expect(statusTitle.textContent).toBe('Clouds');
	}));

	it('should display average temperature', async(() => {
		const averageTemperature = fixture.debugElement.query(By.css('.temperature')).nativeElement;
		expect(averageTemperature.textContent).toBe(' 24° / 25° ');
	}));

	it('should display wind speed', async(() => {
		const wind = fixture.debugElement.query(By.css('.wind')).nativeElement;
		expect(wind.textContent).toBe(' 1.68 ');
	}));
});
