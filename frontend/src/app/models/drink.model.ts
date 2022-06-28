import { EntityBase } from "./entityBase.model";

export class Drink extends EntityBase {
    name: string | undefined;
    price: number = 0;
}