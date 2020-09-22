import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastChartComponent } from './forecast-chart.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LineChartModule } from '@swimlane/ngx-charts';
import { TemperaturePipe } from '../../../core/pipes/temperature/temperature.pipe';
import { ForecastType } from '../../models/enums/forecast-type.enum';
import { hourlyDataForTests } from '../../utils/testing';
import { filter } from 'rxjs/operators';
import { By } from '@angular/platform-browser';

describe('ForecastChartComponent', () => {
	let component: ForecastChartComponent;
	let fixture: ComponentFixture<ForecastChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ForecastChartComponent],
			imports: [BrowserAnimationsModule, CommonModule, LineChartModule],
			providers: [TemperaturePipe],
		})
			.overrideComponent(ForecastChartComponent, {
				set: { changeDetection: ChangeDetectionStrategy.Default },
			})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ForecastChartComponent);
		component = fixture.componentInstance;
		component.data = {
			hourly: hourlyDataForTests,
		};
		component.forecastType = ForecastType.TEMPERATURE;
		component.selectedPeriod = 12;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should set data with Inputs and render chart', async(() => {
		fixture.whenStable().then(() => {
			expect((component as any)._data).toEqual({ hourly: hourlyDataForTests });
			expect(component.numberOfHours).toEqual(12);
			component.chartData$.pipe(filter((e) => !!e)).subscribe((val) => {
				expect(val.temperature[0].series.length).toEqual(12);
				expect(val.wind[0].series.length).toEqual(12);
			});
			const chart = fixture.debugElement.query(By.css('ngx-charts-line-chart'));
			expect(chart.nativeElement).toBeTruthy();
		});
	}));
});
