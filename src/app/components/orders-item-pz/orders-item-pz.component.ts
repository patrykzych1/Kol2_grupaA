import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-pz',
  templateUrl: './orders-item-pz.component.html',
  styleUrls: ['./orders-item-pz.component.css']
})
export class OrdersItemPZComponent implements OnInit {

  @Input() image: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
