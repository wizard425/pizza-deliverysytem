import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Extra } from 'src/app/models/extra.model';
import { ExtraService } from 'src/app/services/extra.service';
import { Drink } from '../../models/drink.model';
import { Pizza } from '../../models/pizza.model';
import { DrinkService } from '../../services/drink.service';
import { PizzaService } from '../../services/pizza.service';
import { latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'pd-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  extras: Extra[] = [];
  pizzas: Pizza[] | null = null;
  drinks: Drink[] | null = null;
  selectedMenu = 0;
  constructor(private pizzaService: PizzaService,
    private drinkService: DrinkService,
    private extraService: ExtraService) {

  }

  ngOnInit(): void {
    this.getAllPizzas();
    this.getAllExtras();
  }

  getAllPizzas() {
    this.pizzaService.getAll().subscribe(res => {
      this.pizzas = res;
    });
  }

  getAllExtras() {
    this.extraService.getAll().subscribe(res => {
      this.extras = res;
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

  ptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 16,
    center: latLng(46.5679901, 11.558441)
  };

  layers = [
    marker([46.5679901, 11.558441])
  ];

}
