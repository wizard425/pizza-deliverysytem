import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderItem } from 'src/app/models/orderItem.model';
import { Pizza } from 'src/app/models/pizza.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'pd-pizza-order-detail',
  templateUrl: './pizza-order-detail.component.html',
  styleUrls: ['./pizza-order-detail.component.scss']
})
export class PizzaOrderDetailComponent implements OnInit {

  @Output() submit: EventEmitter<OrderItem | null> = new EventEmitter<OrderItem | null>();

  pizza: Pizza;
  amount: number = 1;

  constructor(@Inject(MAT_DIALOG_DATA) data: Pizza,
    private cartService: CartService) {
    this.pizza = data;
  }

  ngOnInit(): void {
  }


  order() {
    if (this.amount > 0) {
      let orderitem = Object.assign(new OrderItem(), {
        pizza: this.pizza,
        amount: this.amount,
        pizzaId: this.pizza.id
      })
      this.submit.emit(orderitem);
    } else
      this.submit.emit(null);
  }

  cancel() {
    this.submit.emit(null);
  }

}
