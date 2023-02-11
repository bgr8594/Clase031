import { Component, OnInit } from '@angular/core';
import { Gasto } from '../interface/gasto';
 import { GastoService } from '../service/gasto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
})
export class PresupuestoPage implements OnInit {

  public gastos: string[]=['Directos','Fijos', 'Variables'];
  public selectedValue: any;
  public monto: number=0;
  public resultados: string='';
  public errResultados: string='light';
  public descripcion: string='';
  public tipoGasto: string='';
  public gastosList: Gasto[]=[];

  constructor(private gastosService: GastoService) { }

  ngOnInit() {
  }

  customPopoverOptions: any = {
    header: 'Seleccion de gasots',
    subHeader: 'Seleccione el tipo de gasto',
    message: 'Solo seleccione un tipo de gasto'
  };

  cambioValor(value: any){
    console.log(value);
  }
 
  guardar(){
    this.resultados ="";
    if(this.monto!=null && this.selectedValue!=null && this.descripcion!= null && this.monto > 0
       && this.descripcion!= ''){
      this.errResultados = 'success';
      this.resultados = 'Gasto seleccionado: '+this.selectedValue+' \nMonto: '+this.monto+'\n'+
      'Descricion: '+this.descripcion;
      let gasto: Gasto = {
      descripcion: this.descripcion,
      tipo: this.selectedValue,
      monto: this.monto
    }
      this.gastosService.agregar(gasto);
      this.gastosList = this.gastosService.getGastos();
    }
    else{
      this.errResultados = 'danger';
      this.resultados ="No a completado los campos del formulario";
    }
  }

  borrarGasto(gasto: Gasto){
    this.gastosService.borrarGasto(gasto);
    this.gastosList = this.gastosService.getGastos();
  }

}
