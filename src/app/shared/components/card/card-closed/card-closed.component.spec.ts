import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClosedComponent } from './card-closed.component';

describe('CardClosedComponent', () => {
  let component: CardClosedComponent;
  let fixture: ComponentFixture<CardClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
