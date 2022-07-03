import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pd-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  sidenavIsOpen: boolean = false;
  @ViewChild("sidenav") drawer: any;

  isMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isMobile = (window.innerWidth <= 800);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.isMobile = (event.target.innerWidth <= 800);
  }
  toggleDrawer(event: boolean) {
    this.drawer.toggle();
  }
  toggleDrawer2() {
    this.drawer.toggle();
  }

}
