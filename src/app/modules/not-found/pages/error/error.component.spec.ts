import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { By } from '@angular/platform-browser';

describe('ErrorComponent', () => {
	let component: ErrorComponent;
	let fixture: ComponentFixture<ErrorComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ErrorComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ErrorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('Should contain oops word', () => {
		const span = fixture.debugElement.query(By.css('span')).nativeElement;
		expect(span.textContent).toBe('OOPS!');
	});
});
