import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsPZComponent } from './orders-details-pz.component';

describe('OrdersDetailsPZComponent', () => {
  let component: OrdersDetailsPZComponent;
  let fixture: ComponentFixture<OrdersDetailsPZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsPZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsPZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
