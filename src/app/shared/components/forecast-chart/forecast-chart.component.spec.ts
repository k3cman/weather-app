import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastChartComponent } from './forecast-chart.component';
import { ChangeDetectionStrategy } from '@angular/core';

describe('ForecastComponent', () => {
	let component: ForecastChartComponent;
	let fixture: ComponentFixture<ForecastChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ForecastChartComponent],
		})
			.overrideComponent(ForecastChartComponent, {
				set: { changeDetection: ChangeDetectionStrategy.Default },
			})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ForecastChartComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should set');
});
