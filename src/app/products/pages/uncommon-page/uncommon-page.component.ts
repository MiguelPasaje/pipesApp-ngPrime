import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18nselect
  public name: string = 'Miguel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Juana';
    this.gender = 'female';
  }

  //i18nplural

  public clients: string[] = [
    'cliente uno',
    'cliente dos',
    'cliente tres',
    'cliente cuatro',
  ];
  public clientsMap = {
    '=0': 'no hay clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deletClient(): void {
    this.clients.shift();
  }

  //key value pipe
  public person = {
    name: 'Miguel',
    age: '29',
    address: 'Colombia',
  };

  //async pipe

  public myObservableTimer = interval(1000).pipe(
    tap((val) => console.log(`tap ${val}`))
  );

  public promiseValue: Promise<string> = new Promise((resolve,reject) =>
    setTimeout(() => resolve('Promise resolved!'), 3000)
  );
}
