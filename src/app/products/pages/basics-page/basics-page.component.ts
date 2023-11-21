import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'luis vigoya';
  public nameUpper: string = 'LUIS VIGOYA';
  public nameTitle: string = 'lUiS VIgOyA';

  public customData: Date = new Date();

}
