import { Component } from '@angular/core';
import EntityObj from './modules/EntityObj.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'generics';
}

function transformEntity<V>(obj: V): V {
  return obj;
}

console.log(transformEntity<string>('fdsfd'));
console.log(transformEntity<number>(32432));


function transform<V, B>(obj: V, obj1: B): B & V {
  return {
      ...obj,
      ...obj1
  };
}

console.log(transform<EntityObj<number>, EntityObj<string>>({id: 13, person: 4}, {id: 235, person: 'Vasia'}));