import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-text-pz',
  templateUrl: './orders-item-text-pz.component.html',
  styleUrls: ['./orders-item-text-pz.component.css']
})
export class OrdersItemTextPZComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
