import { EntityBase } from "./entityBase.model";
import { OrderItemExtra } from "./orderItemExtra.model";
import { Pizza } from "./pizza.model";

export class OrderItem extends EntityBase {
    orderId: number | undefined;
    pizzaId: number | undefined;
    pizza: Pizza | undefined;
    notes: string | undefined;
    orderItemExtras: OrderItemExtra[] = [];
}