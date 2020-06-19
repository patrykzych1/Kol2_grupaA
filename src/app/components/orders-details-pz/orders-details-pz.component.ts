import { Component, OnInit } from '@angular/core';
import {PZDataService} from '../../services/pz-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orders-details-pz',
  templateUrl: './orders-details-pz.component.html',
  styleUrls: ['./orders-details-pz.component.css']
})
export class OrdersDetailsPZComponent implements OnInit {
  public image = '';
  public text: string;
  public title: string;
  public id: string;
  public price: string;
  constructor(private dataService: PZDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    this.dataService.getById(id).subscribe(res => {
      this.id = res['id'];
      this.title = res['title']
      this.image = res['image'];
      this.text = res['text'];
      this.price = res['price'];
    });
  }

}
