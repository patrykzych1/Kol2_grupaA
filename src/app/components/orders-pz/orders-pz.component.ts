import { Component, OnInit } from '@angular/core';
import {PZDataService} from '../../services/pz-data.service';

@Component({
  selector: 'app-orders-pz',
  templateUrl: './orders-pz.component.html',
  styleUrls: ['./orders-pz.component.css']
})
export class OrdersPZComponent implements OnInit {

  public items$: any;
  constructor(private service: PZDataService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }
}
