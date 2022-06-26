import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Extra } from 'src/app/models/extra.model';
import { ExtraService } from 'src/app/services/extra.service';
import { ExtraDetailComponent } from './extra-detail/extra-detail.component';

@Component({
  selector: 'pd-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss']
})
export class ExtrasComponent implements OnInit {

  dataSource: MatTableDataSource<Extra> = new MatTableDataSource<Extra>();
  displayedColumns: string[] = ['id', 'name', 'price'];

  constructor(private extraService: ExtraService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllExtras();
  }

  getAllExtras() {
    this.extraService.getAll().subscribe(res => {
      this.dataSource.data = res;
      console.log(res);
    });
  }

  openDetail() {
    const diaRef = this.dialog.open(ExtraDetailComponent);
    
  }
}
