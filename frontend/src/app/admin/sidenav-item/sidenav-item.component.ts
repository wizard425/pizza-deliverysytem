import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pd-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {
  @Input()label = "";
  @Input() link = "";
  @Input() icon = "";
  @Input() isSelectable = true;

  constructor() { }

  ngOnInit(): void {
  }

}
