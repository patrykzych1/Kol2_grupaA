import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemImagePZComponent } from './orders-item-image-pz.component';

describe('OrdersItemImagePZComponent', () => {
  let component: OrdersItemImagePZComponent;
  let fixture: ComponentFixture<OrdersItemImagePZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemImagePZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemImagePZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
