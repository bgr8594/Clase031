import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homeVendedor'
})
export class HomeVendedorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
