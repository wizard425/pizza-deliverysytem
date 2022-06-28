import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Drink } from 'src/app/models/drink.model';
import { DrinkService } from 'src/app/services/drink.service';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';

@Component({
  selector: 'pd-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  dataSource: MatTableDataSource<Drink> = new MatTableDataSource<Drink>();
  displayedColumns = ['id', 'name', 'description', 'price'];

  constructor(private drinkService: DrinkService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllDrinks();
  }

  getAllDrinks() {
    this.drinkService.getAll().subscribe(res => {
      this.dataSource.data = res;
      console.log(res);
    });
  }

  openDetail() {
    const diaRef = this.dialog.open(DrinkDetailComponent);
    diaRef.componentInstance.cancel.subscribe(res => {
      diaRef.close();
    });
    diaRef.componentInstance.submit.subscribe(res => {
      this.drinkService.create(res).subscribe(resp => {
        this.dataSource.data.push(resp);
        this.dataSource.data = this.dataSource.data;
        diaRef.close();
      })
    });
  }

  editExtra(id: number) {
    const diaRef = this.dialog.open(DrinkDetailComponent, { data: this.dataSource.data.find(x => x.id == id) });
    diaRef.componentInstance.cancel.subscribe(res => {
      diaRef.close();
    });
    diaRef.componentInstance.submit.subscribe(res => {
      this.drinkService.update(res).subscribe(resp => {
        let index = this.dataSource.data.findIndex(x => x.id == resp.id);
        this.dataSource.data[index] = resp;
        diaRef.close();
      })
    });
  }

}
