import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaOrderDetailComponent } from '../pizza-order-detail/pizza-order-detail.component';

@Component({
  selector: 'pd-pizza-menu-item',
  templateUrl: './pizza-menu-item.component.html',
  styleUrls: ['./pizza-menu-item.component.scss']
})
export class PizzaMenuItemComponent implements OnInit {

  @Input() pizza!: Pizza;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openOrderDetail() {
    const diaRef = this.dialog.open(PizzaOrderDetailComponent);
  }

}
