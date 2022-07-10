import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/models/order.model';
import { OrderItem } from 'src/app/models/orderItem.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'pd-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: OrderItem[] = [];
  form!: FormGroup;

  constructor(private cartService: CartService,
    private fb: FormBuilder,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.getCart();
    this.buildForm();
  }

  async getCart() {
    this.cart = await this.cartService.getAllItems();
    console.log(this.cart);
  }

  order() {
    if (this.form.valid) {

      this.cart.forEach(item => {
        delete item.id;
      })

      let order = Object.assign(new Order, {
        location: this.form.controls['location'].value,
        notes: this.form.controls['notes'].value,
        isCompleted: false,
        phoneNumber: String(this.form.controls['phone'].value),
        orderItems: this.cart
      });
      console.log(order);
      this.orderService.create(order).subscribe(res => {
        console.log('okok')
      })
    }
  }

  async clear() {
    await this.cartService.clearCart();
    this.cart = [];
  }

  buildForm() {
    this.form = this.fb.group({
      phone: ['', Validators.required],
      notes: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

}
