import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtrasRoutingModule } from './extras-routing.module';
import { ExtrasComponent } from './extras.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ExtraDetailComponent } from './extra-detail/extra-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ExtrasComponent,
    ExtraDetailComponent
  ],
  imports: [
    CommonModule,
    ExtrasRoutingModule,
    TranslateModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class ExtrasModule { }
