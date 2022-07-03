import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import {MatIconModule} from '@angular/material/icon'
import { TranslateModule } from '@ngx-translate/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TopbarComponent } from './topbar/topbar.component';
import { TopbarModule } from './topbar/topbar.module';



@NgModule({
  declarations: [
    AdminComponent,
    SidenavItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    MatIconModule,
    TranslateModule,
    MatSidenavModule,
    TopbarModule
  ]
})
export class AdminModule { }
