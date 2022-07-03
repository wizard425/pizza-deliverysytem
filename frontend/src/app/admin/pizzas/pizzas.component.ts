import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'pd-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {

  dataSource: MatTableDataSource<Pizza> = new MatTableDataSource<Pizza>();
  displayedColumns: string[] = ['name', 'description', 'price'];

  constructor(private pizzaService: PizzaService,
    private router: Router,
    private act: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllPizzas();
  
  }

  addPizza(){
    this.router.navigate(['new'], { relativeTo: this.act});
  }

  openDetail(pizzaId: number){
    this.router.navigate(['detail/' + pizzaId], { relativeTo: this.act});
  }

  getAllPizzas(){
    this.pizzaService.getAll().subscribe(res => {
      this.dataSource.data = res;
    });
  }

}
