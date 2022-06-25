import { EntityBase } from "./entityBase.model";
import { OrderItem } from "./orderItem.model";

export class Order extends EntityBase{
    location: string | undefined;
    notes: string | undefined;
    isCompleted: boolean | undefined;
    phoneNumber: string | undefined;
    orderItems: OrderItem[] = [];
}