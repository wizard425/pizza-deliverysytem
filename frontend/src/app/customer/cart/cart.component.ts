import { Component, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/models/orderItem.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'pd-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: OrderItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCart();
  }

  async getCart() {
    this.cart = await this.cartService.getAllItems();
    console.log(this.cart);
  }

}
