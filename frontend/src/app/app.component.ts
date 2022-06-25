import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PizzaDeliveryFrontend';

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private translate: TranslateService){

  }

  private addIcons() {
    this.matIconRegistry.addSvgIcon("straka-home", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/home.svg"));
  }
}
