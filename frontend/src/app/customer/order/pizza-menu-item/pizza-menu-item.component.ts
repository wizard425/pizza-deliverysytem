import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Extra } from 'src/app/models/extra.model';
import { Pizza } from 'src/app/models/pizza.model';
import { CartService } from 'src/app/services/cart.service';
import { PizzaOrderDetailComponent } from '../pizza-order-detail/pizza-order-detail.component';

@Component({
  selector: 'pd-pizza-menu-item',
  templateUrl: './pizza-menu-item.component.html',
  styleUrls: ['./pizza-menu-item.component.scss']
})
export class PizzaMenuItemComponent implements OnInit {

  @Input() pizza!: Pizza;
  @Input() extras!: Extra[];
  constructor(private dialog: MatDialog,
    private cartService: CartService,
    private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  openOrderDetail() {
    const diaRef = this.dialog.open(PizzaOrderDetailComponent, { data: { pizza: this.pizza, extras: this.extras } });
    diaRef.componentInstance.submit.subscribe(async res => {
      if (res) {
        await this.cartService.addItem(res);
        diaRef.close();
        this.snack.open('Pizza erfolgreich der Bestellliste hinzugefügt!', '', {duration: 3000,
          panelClass: ['custom-snackbar'],});
      }
      else
        diaRef.close();
    })
  }

}
