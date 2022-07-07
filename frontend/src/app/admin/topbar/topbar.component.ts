import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() title = "";
  @Output() toggle : EventEmitter<boolean> = new EventEmitter<boolean>();

  isMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isMobile = (window.innerWidth <= 800);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.isMobile = (event.target.innerWidth <= 800);
  }

  openSidenav(){
    this.toggle.emit(true);
  }

}
