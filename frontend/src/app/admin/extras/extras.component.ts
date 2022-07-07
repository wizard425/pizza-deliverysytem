import { RepositionScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
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
  displayedColumns: string[] = [ 'name', 'price'];

  selectedId: number | null = null;

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
    diaRef.componentInstance.cancel.subscribe(res => {
      diaRef.close();
    });
    diaRef.componentInstance.submit.subscribe(res => {
      this.extraService.create(res).subscribe(resp => {
        this.dataSource.data.push(resp);
        this.dataSource.data = this.dataSource.data;
        diaRef.close();
      })
    });
  }

  editExtra(id: number) {
    const diaRef = this.dialog.open(ExtraDetailComponent, { data: this.dataSource.data.find(x => x.id == id) });
    diaRef.componentInstance.cancel.subscribe(res => {
      diaRef.close();
    });
    diaRef.componentInstance.submit.subscribe(res => {
      this.extraService.update(res).subscribe(resp => {
        let index = this.dataSource.data.findIndex(x => x.id == resp.id);
        this.dataSource.data[index] = resp;
        diaRef.close();
      })
    });
  }
}
