import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'pd-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {

  dataSource: MatTableDataSource<Pizza> = new MatTableDataSource<Pizza>();
  displayedColumns: string[] = ['id', 'name', 'description', 'price'];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.getAllPizzas();
  
  } 
  getAllPizzas(){
    this.pizzaService.getAll().subscribe(res => {
      this.dataSource.data = res;
    });
  }

}
