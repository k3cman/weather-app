import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsComponent } from './card-details.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { TimeOfDay } from '../../../models/enums/time-of-day.enum';
import { hourlyDataForTests } from '../../../utils/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ButtonsModule } from '../../buttons/buttons.module';
import { LoaderModule } from '../../loader/loader.module';
import { ForecastChartModule } from '../../forecast-chart/forecast-chart.module';
import { By } from '@angular/platform-browser';
import { ForecastType } from '../../../models/enums/forecast-type.enum';

describe('CardDetailsComponent', () => {
	let component: CardDetailsComponent;
	let fixture: ComponentFixture<CardDetailsComponent>;
	let store: MockStore;
	const initialState = {};
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CardDetailsComponent],
			imports: [ButtonsModule, LoaderModule, ForecastChartModule],
			providers: [provideMockStore({ initialState })],
		})
			.overrideComponent(CardDetailsComponent, {
				set: { changeDetection: ChangeDetectionStrategy.Default },
			})
			.compileComponents();

		store = TestBed.inject(MockStore);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CardDetailsComponent);
		component = fixture.componentInstance;
		component.timeOfDay = TimeOfDay.DAY;
		(component as any).forecastData$.next(hourlyDataForTests);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have title Forecast', async(() => {
		fixture.whenStable().then(() => {
			const title = fixture.debugElement.query(By.css('.header')).nativeElement;
			expect(title.textContent).toBe('Forecast');
		});
	}));

	it('should change number of hours', () => {
		component.changeHours(13);
		fixture.detectChanges();
		expect(component.numberOfHours).toEqual(13);
	});

	it('should change type of forecast', () => {
		component.setForecastType(ForecastType.WIND);
		fixture.detectChanges();
		expect(component.activeForecast).toEqual(ForecastType.WIND);
	});
});
