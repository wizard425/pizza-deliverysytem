import Dexie from 'dexie';
import { v4 as uuidv4 } from 'uuid';
import { OrderItem } from '../models/orderItem.model';
export class DbService extends Dexie {
    private orderitems!: Dexie.Table<OrderItem, string>;

    constructor() {
        super('cart');
        this.version(1).stores({
            orderitems: 'id',
        });
        console.log("incon")
    }

    async getOrderItems() {
        return this.orderitems
            .toArray();
    }

    async addOrderItem(item: OrderItem) {
        item.id = uuidv4();
        this.orderitems.add(item);
    }

    async getAllOrderItems() : Promise<OrderItem[]>{
        return this.orderitems.toArray();
    }

    async clearAllItems(): Promise<any> {
        return this.orderitems.clear();
    }
}