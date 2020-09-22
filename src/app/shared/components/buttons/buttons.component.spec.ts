import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';
import { TimeOfDay } from '../../models/enums/time-of-day.enum';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

describe('ButtonsComponent', () => {
	let component: ButtonsComponent;
	let fixture: ComponentFixture<ButtonsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ButtonsComponent],
			providers: [
				{
					provide: ComponentFixtureAutoDetect,
					useValue: true,
				},
			],
		})
			.overrideComponent(ButtonsComponent, {
				set: { changeDetection: ChangeDetectionStrategy.Default },
			})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ButtonsComponent);
		component = fixture.componentInstance;
		component.timeOfDay = TimeOfDay.DAY;
		component.buttons = [
			{
				value: 1,
				title: 'Test',
			},
		];
		component.active = 1;
		fixture.changeDetectorRef.markForCheck();
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Test time of day @Input()', () => {
		component.timeOfDay = TimeOfDay.DAY;
		expect(component.timeOfDay).toBe(TimeOfDay.DAY);
		component.timeOfDay = TimeOfDay.NIGHT;
		expect(component.timeOfDay).toBe(TimeOfDay.NIGHT);
	});

	it('Should change buttons array with @Input()', () => {
		component.buttons = [
			{
				value: 1,
				title: 'Test',
			},
		];
		expect(component.buttons).toEqual([
			{
				value: 1,
				title: 'Test',
			},
		]);
	});

	it('Should render elements after setting the @Inputs()', () => {
		fixture.whenStable().then(() => {
			expect(fixture.debugElement.query(By.css('.day')).classes['day']).toBeTruthy();
			const btn = fixture.debugElement.query(By.css('button'));
			expect(btn.nativeElement.textContent).toBe(' Test ');
		});

		fixture.whenStable().then(() => {
			const btn = fixture.debugElement.query(By.css('button'));
			expect(btn.classes['active']).toBeTruthy();
		});
	});

	it('Should emit event on click', () => {
		fixture.whenStable().then(() => {
			component.selected.subscribe((selected) => {
				console.log(selected);
				expect(selected).toEqual(1);
			});
			const btn = fixture.debugElement.query(By.css('button')).nativeElement;
			btn.click();
		});
	});
});
