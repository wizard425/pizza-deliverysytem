import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'pd-pizza-menu-item',
  templateUrl: './pizza-menu-item.component.html',
  styleUrls: ['./pizza-menu-item.component.scss']
})
export class PizzaMenuItemComponent implements OnInit {

  @Input() pizza!: Pizza;

  constructor() { }

  ngOnInit(): void {
  }

}
