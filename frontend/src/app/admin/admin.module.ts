import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import {MatIconModule} from '@angular/material/icon'
import { TranslateModule } from '@ngx-translate/core';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    SidenavItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    MatIconModule,
    TranslateModule,
    MatSidenavModule
  ]
})
export class AdminModule { }
