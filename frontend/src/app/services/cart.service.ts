import { Injectable } from '@angular/core';
import { OrderItem } from '../models/orderItem.model';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  db!: DbService;

  constructor() {
    this.db = new DbService();
  }

  async addItem(item: OrderItem){
    await this.db.addOrderItem(item);
  }

  removeItem(){

  }

  async getAllItems(): Promise<OrderItem[]> {
    return this.db.getAllOrderItems();
  }

}
