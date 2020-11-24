import {Pipe, PipeTransform} from '@angular/core';
import {client} from './model/client';

@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

  transform(clients: client[], searchValue: string): client[] {
    if (!clients || !searchValue) {
      return clients;
    }
    return clients.filter(x => x.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      || x.cin.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      x.numero.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      x.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      x.prenom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );

  }

}
