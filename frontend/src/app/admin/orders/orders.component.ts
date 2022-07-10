import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { SignalrService } from 'src/app/services/signalr.service';

@Component({
  selector: 'pd-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];

  constructor(protected signalRService: SignalrService,
    private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.signalRService.startConnection()
    this.signalRService.subscribeToOrders();
  }

  inSystem(orderId: number | undefined) {
    if (orderId) {
      let order = this.signalRService.orders.find(r => r.id == orderId);
      if (order) {
        order.isInSystem = true;
        this.orderService.update(order).subscribe(rest => {
          this.orderService.getAllFromToday().subscribe(res => {
            this.signalRService.orders = res;
          })
        })
      }
    }
  }

}
