import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Luis';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient():void {
    this.name = 'Fernanda';
    this.gender = 'female';
  };

  deleteClient():void {
    this.clients.shift();
  };

  // i18n Plural
  public clients: string[] = ['Fernanda', ' Andres', ' Andrea', ' Cesar', ' Julian', ' Luis', ' Carlos', ' Harrinson'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  };

  // KeyValue Pipe
  public person = {
    name: 'Luis',
    age: 25,
    addres: 'Bogotá, Colombia',
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log( 'tap:', value ) ),
  );

  public promiseValue: Promise<string> = new Promise(( resolve, reject ) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa' )
    }, 3500);
  });

}
