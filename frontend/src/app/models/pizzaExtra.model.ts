import { EntityBase } from "./entityBase.model";
import { Extra } from "./extra.model";
import { Pizza } from "./pizza.model";

export class PizzaExtra extends EntityBase{
    extraId: number | undefined;
    extra: Extra | undefined;

    pizzaId: number | undefined;
    pizza: Pizza | undefined;
}