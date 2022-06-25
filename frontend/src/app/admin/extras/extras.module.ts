import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtrasRoutingModule } from './extras-routing.module';
import { ExtrasComponent } from './extras.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    ExtrasComponent
  ],
  imports: [
    CommonModule,
    ExtrasRoutingModule,
    TranslateModule,
    MatTableModule
  ]
})
export class ExtrasModule { }
