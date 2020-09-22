import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClosedComponent } from './card-closed.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { currentPlaceForTest } from '../../../utils/testing';
import { By } from '@angular/platform-browser';
import { TemperaturePipe } from '../../../../core/pipes/temperature/temperature.pipe';
import { PipesModule } from '../../../../core/pipes/pipes.module';

describe('CardClosedComponent', () => {
	let component: CardClosedComponent;
	let fixture: ComponentFixture<CardClosedComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CardClosedComponent],
			imports: [PipesModule],
		})
			.overrideComponent(CardClosedComponent, {
				set: {
					changeDetection: ChangeDetectionStrategy.Default,
				},
			})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CardClosedComponent);
		component = fixture.componentInstance;
		component.weatherData = currentPlaceForTest;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should display city name', async(() => {
		fixture.whenStable().then(() => {
			const cityName = fixture.debugElement.query(By.css('.city')).nativeElement;
			expect(cityName.textContent).toBe('Munich');
		});
	}));

	it('should display temperature', async(() => {
		fixture.whenStable().then(() => {
			const cityName = fixture.debugElement.query(By.css('.temperature')).nativeElement;
			expect(cityName.textContent).toBe('25°');
		});
	}));
});
