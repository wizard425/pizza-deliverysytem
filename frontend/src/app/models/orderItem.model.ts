import { EntityBase } from "./entityBase.model";
import { OrderItemExtra } from "./orderItemExtra.model";
import { Pizza } from "./pizza.model";

export class OrderItem {
    id: number | string | undefined;
    createdOn: Date | undefined;
    lastModifiedOn: Date | undefined;
    orderId: number | undefined;
    pizzaId: number | undefined;
    pizza: Pizza | undefined;
    notes: string | undefined;
    amount: number | undefined;
    orderItemExtras: OrderItemExtra[] = [];
    orderItemsMinus: OrderItemExtra[] = [];
}