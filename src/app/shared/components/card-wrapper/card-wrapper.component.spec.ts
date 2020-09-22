import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWrapperComponent } from './card-wrapper.component';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';
import { ChangeDetectionStrategy } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { currentPlaceForTest } from '../../utils/testing';
import { TimeOfDay } from '../../models/enums/time-of-day.enum';
import { CardState } from '../../models/enums/card-state.enum';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CardWrapperComponent', () => {
	let component: CardWrapperComponent;
	let fixture: ComponentFixture<CardWrapperComponent>;
	let store: MockStore;
	const initialState = {
		userInterface: {
			selected: {
				lat: null,
				lon: null,
				id: null,
			},
		},
	};
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CardWrapperComponent],
			imports: [CommonModule, CardModule, BrowserAnimationsModule],
			providers: [provideMockStore({ initialState })],
		})
			.overrideComponent(CardWrapperComponent, {
				set: { changeDetection: ChangeDetectionStrategy.Default },
			})
			.compileComponents();

		store = TestBed.inject(MockStore);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CardWrapperComponent);
		component = fixture.componentInstance;
		component.place = currentPlaceForTest;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should display only card', async(() => {
		fixture.whenStable().then(() => {
			expect(component.timeOfDay).toEqual(TimeOfDay.DAY);
			expect(component.currentState).toEqual(CardState.STANDARD);
			const card = fixture.debugElement.query(By.css('card'));
			expect(card.nativeElement).toBeTruthy();
		});
	}));

	it('should open the card when selected', async(() => {
		component.cords = { cords: { lat: 48.14, lon: 11.58 }, id: '2867714' };
		store.setState({
			userInterface: {
				selected: {
					lat: 48.14,
					lon: 11.58,
					id: '2867714',
				},
			},
		});
		fixture.detectChanges();

		fixture.whenStable().then(() => {
			expect(component.currentState === CardState.EXPANDED);
		});
	}));
});
