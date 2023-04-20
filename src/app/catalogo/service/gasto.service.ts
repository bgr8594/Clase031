import { Injectable } from '@angular/core';
import { interfazGastos } from '../../interface/interfazGastos';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  gastos: interfazGastos[] = [];

  constructor() { }

  agregar(gasto: interfazGastos){
    if(this.gastos.length==0){
      gasto.id = 1;

    } else {
      gasto.id = this.gastos.length + 1;
    }
    this.gastos.push(gasto);
  }

  borrarGasto(gasto: interfazGastos){
    this.gastos = this.gastos.filter((g) => g.id!= (gasto.id!= null?gasto.id:0));
  }

  getGastos(){
    return this.gastos;
  }
}
