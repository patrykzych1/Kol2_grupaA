import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemPZComponent } from './orders-item-pz.component';

describe('OrdersItemPZComponent', () => {
  let component: OrdersItemPZComponent;
  let fixture: ComponentFixture<OrdersItemPZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemPZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemPZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
