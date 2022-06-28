import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'pd-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {

  }

  ngOnInit(): void {
    this.getAllPizzas();
  }

  getAllPizzas() {
    this.pizzaService.getAll().subscribe(res => {
      this.pizzas = res;
    })
  }

}
