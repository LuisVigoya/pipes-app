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
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-fw pi-hashtag',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-fw pi-globe',
            routerLink: 'uncommon'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-fw pi-plus-circle',
            routerLink: 'custom',
          }
        ]
      }
    ]
  }

}
