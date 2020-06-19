import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersPZComponent } from './components/orders-pz/orders-pz.component';
import { OrdersItemPZComponent } from './components/orders-item-pz/orders-item-pz.component';
import { OrdersDetailsPZComponent } from './components/orders-details-pz/orders-details-pz.component';
import {PZDataService} from './services/pz-data.service';
import { OrdersItemImagePZComponent } from './components/orders-item-image-pz/orders-item-image-pz.component';
import { OrdersItemTextPZComponent } from './components/orders-item-text-pz/orders-item-text-pz.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    OrdersPZComponent,
    OrdersItemPZComponent,
    OrdersDetailsPZComponent,
    OrdersItemImagePZComponent,
    OrdersItemTextPZComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PZDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
