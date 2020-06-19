import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-image-pz',
  templateUrl: './orders-item-image-pz.component.html',
  styleUrls: ['./orders-item-image-pz.component.css']
})
export class OrdersItemImagePZComponent implements OnInit {

  @Input() image: string;
  constructor() { }

  ngOnInit() {
  }

}
