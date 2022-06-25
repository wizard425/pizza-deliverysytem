import { EntityBase } from "./entityBase.model";
import { Extra } from "./extra.model";

export class OrderItemExtra extends EntityBase {
    orderItemId: number | undefined;
    extraId: number | undefined;
    extra: Extra | undefined;
}