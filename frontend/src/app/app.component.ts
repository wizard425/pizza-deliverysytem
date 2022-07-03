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
      this.addIcons();
  }

  private addIcons() {
    this.matIconRegistry.addSvgIcon("pd-cart", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/cart.svg"));    
    this.matIconRegistry.addSvgIcon("pd-extra", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/extra.svg"));
    this.matIconRegistry.addSvgIcon("pd-pizza", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/pizza.svg"));
    this.matIconRegistry.addSvgIcon("pd-drink", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/drink.svg"));
    this.matIconRegistry.addSvgIcon("pd-stats", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/stats.svg"));
    this.matIconRegistry.addSvgIcon("pd-add", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/add-receipe.svg"));
    this.matIconRegistry.addSvgIcon("pd-menu", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/menu.svg"));

  }
}
