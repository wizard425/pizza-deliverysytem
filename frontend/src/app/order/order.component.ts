import { Component, OnInit } from '@angular/core';
import { Drink } from '../models/drink.model';
import { Pizza } from '../models/pizza.model';
import { DrinkService } from '../services/drink.service';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'pd-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  pizzas: Pizza[] = [];
  drinks: Drink[] | null = null;
  selectedMenu = 0;

  constructor(private pizzaService: PizzaService,
    private drinkService: DrinkService) {

  }

  ngOnInit(): void {
    this.getAllPizzas();
  }

  getAllPizzas() {
    this.pizzaService.getAll().subscribe(res => {
      this.pizzas = res;
    });
  }

  getAllDrinks() {
    this.drinkService.getAll().subscribe(res => {
      this.drinks = res;
    });
  }

  viewMenu(id: number) {
    if (id == 2 && this.drinks == null)
      this.getAllDrinks();
    this.selectedMenu = id;
  }

}
