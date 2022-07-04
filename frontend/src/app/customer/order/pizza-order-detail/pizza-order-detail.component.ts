import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Extra } from 'src/app/models/extra.model';
import { OrderItem } from 'src/app/models/orderItem.model';
import { OrderItemExtra } from 'src/app/models/orderItemExtra.model';
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
  extras: Extra[] = [];
  amount: number = 1;
  disabledExtras: OrderItemExtra[] = [];
  extraItems: OrderItemExtra[] = [];


  constructor(@Inject(MAT_DIALOG_DATA) data: { pizza: Pizza, extras: Extra[] },
    private cartService: CartService) {
    this.pizza = data.pizza;
    this.extras = data.extras;
  }

  ngOnInit(): void {
  }


  order() {
    if (this.amount > 0) {
      let orderitem = Object.assign(new OrderItem(), {
        pizza: this.pizza,
        amount: this.amount,
        pizzaId: this.pizza.id,
        orderItemMinus: this.disabledExtras,
        orderItemExtras: this.extraItems
      })
      this.submit.emit(orderitem);
    } else
      this.submit.emit(null);
  }

  cancel() {
    this.submit.emit(null);
  }

  hasExtra(id: number | undefined) {
    if (this.pizza.pizzaExtras.find(res => res.extraId == id)) {
      return true;
    }
    return false;
  }

  onchange(event: MatCheckboxChange) {
    console.log(event);
    // if extra is in pizza and user wants to uncheck it
    if (this.hasExtra(Number(event.source.value)) && event.checked == false) {
      let dis = this.extras.find(res => res.id == Number(event.source.value))
      if (dis)
        this.disabledExtras.push({
          extraId: Number(event.source.value), extra: dis,
          orderItemId: undefined,
          id: undefined,
          createdOn: undefined,
          lastModifiedOn: undefined
        });
      // if extra is in pizza and user wants to reactivate it
    } else if (this.hasExtra(Number(event.source.value)) && event.checked == true) {
      this.disabledExtras = this.disabledExtras.filter(res => res.extraId != Number(event.source.value));
      // user wants to add new extra
    } else if (!this.extraItems.find(ex => ex.extraId == Number(event.source.value)) && event.checked == true) {
      let dis = this.extras.find(res => res.id == Number(event.source.value))
      if (dis)
        this.extraItems.push({
          extraId: Number(event.source.value), extra: dis,
          orderItemId: undefined,
          id: undefined,
          createdOn: undefined,
          lastModifiedOn: undefined
        });
      // user wants to uncheck extra he chosed before
    } else if (this.extraItems.find(ex => ex.extraId == Number(event.source.value)) && event.checked == false) {
      this.extraItems = this.extraItems.filter(res => res.extraId != Number(event.source.value));
    }
  }

}
