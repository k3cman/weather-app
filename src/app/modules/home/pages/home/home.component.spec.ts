import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { ActionsSubject, ReducerManager, StateObservable, Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HomeComponent],
			providers: [provideMockStore()],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have container class', () => {
		expect(fixture.debugElement.query(By.css('.container'))).toBeTrue();
	});
});
