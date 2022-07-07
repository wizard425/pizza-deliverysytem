import { EntityBase } from "./entityBase.model";
import { PizzaExtra } from "./pizzaExtra.model";

export class Pizza extends EntityBase{
    name: string = "";
    description: string | undefined;
    price: number = 0;
    pizzaExtras : PizzaExtra[] = [];

}