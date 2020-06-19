import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemTextPZComponent } from './orders-item-text-pz.component';

describe('OrdersItemTextPZComponent', () => {
  let component: OrdersItemTextPZComponent;
  let fixture: ComponentFixture<OrdersItemTextPZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemTextPZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemTextPZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
