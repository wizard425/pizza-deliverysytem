import { Injectable } from '@angular/core';

import * as signalr from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private hubConn!: signalr.HubConnection;

  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  public startConnection = () => {
    this.getAllFromToday();
    this.hubConn = new signalr.HubConnectionBuilder().withUrl(environment.serverUrl + 'signalr', {
      skipNegotiation: true,
      transport: signalr.HttpTransportType.WebSockets
    }).build();
    this.hubConn.start().then(() => console.log('start'));
  }

  public subscribeToOrders = () => {
    return this.hubConn.on('orders', (data) => {
      let audio = new Audio();
      audio.src = "../../../assets/audio/alarm.wav";
      audio.load();
      audio.play();
      this.orders.push(data);
    });
  }

  public getAllFromToday() {
    this.orderService.getAllFromToday().subscribe(res => {
      this.orders = res;
    });
  }

}
