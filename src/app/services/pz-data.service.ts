import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PZDataService {

  private url = 'https://kol2tai.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url + '/api/order/items');
  }

  getById(id) {
    if (id > 0 && id < 4) {
      return this.http.get(this.url + '/api/order/items/' + id);
    }
    else {
      return;
    }

  }

}
