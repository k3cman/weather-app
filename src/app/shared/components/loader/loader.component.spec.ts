import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import { By } from '@angular/platform-browser';

describe('LoaderComponent', () => {
	let component: LoaderComponent;
	let fixture: ComponentFixture<LoaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LoaderComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have wrapper element with class spinner', () => {
		fixture.whenStable().then(() => {
			const wrapperDiv = fixture.debugElement.query(By.css('.spinner'));
			expect(wrapperDiv).toBeTruthy();
		});
	});
});
