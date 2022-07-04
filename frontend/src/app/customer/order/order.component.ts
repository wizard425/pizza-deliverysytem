import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, ZoomAnimEvent } from 'leaflet';
import { Extra } from 'src/app/models/extra.model';
import { ExtraService } from 'src/app/services/extra.service';
import { Drink } from '../../models/drink.model';
import { Pizza } from '../../models/pizza.model';
import { DrinkService } from '../../services/drink.service';
import { PizzaService } from '../../services/pizza.service';

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

  options: MapOptions = {
    layers: [tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      opacity: 0.7,
      maxZoom: 19,
      detectRetina: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })],
    zoom: 1,
    center: latLng(0, 0)
  };

  public map! : Map;
  public zoom!: number;

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

  onMapReady(map: Map) {
    this.map = map;
    this.zoom = map.getZoom();
  }

  onMapZoomEnd(e: ZoomAnimEvent) {
    this.zoom = e.target.getZoom();
  }

}
