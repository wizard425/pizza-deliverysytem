import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink.model';

@Component({
  selector: 'pd-drink-menu-item',
  templateUrl: './drink-menu-item.component.html',
  styleUrls: ['./drink-menu-item.component.scss']
})
export class DrinkMenuItemComponent implements OnInit {

  @Input() drink!: Drink;

  constructor() { }

  ngOnInit(): void {
  }

}
