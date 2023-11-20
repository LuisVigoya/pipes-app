import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [

  ]
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Números',
            icon: 'pi pi-fw pi-hashtag'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-fw pi-globe'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Otros pipes',
            icon: 'pi pi-fw pi-cart-plus'
          }
        ]
      }
    ]
  }

}
