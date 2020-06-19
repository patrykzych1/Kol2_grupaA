import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPZComponent } from './orders-pz.component';

describe('OrdersPZComponent', () => {
  let component: OrdersPZComponent;
  let fixture: ComponentFixture<OrdersPZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
