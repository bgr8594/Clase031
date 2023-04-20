import { Component, OnInit } from '@angular/core';
import { interfazGastos } from 'src/app/interface/interfazGastos';
 import { GastoService }  from '../service//gasto.service'

@Component({
  selector: 'app-catalogo-cancion-new',
  templateUrl: './catalogo-cancion-new.component.html',
  styleUrls: ['./catalogo-cancion-new.component.scss'],
})
export class CatalogoCancionNewComponent  implements OnInit {

  public gastos: string[] = ['Directos', 'Fijos','Variables'];
  public selectedValue: any;
  public monto: number = 0;
  public results: string ='';
  public erResults: string ='light';
  public descripcion: string ='';
  public lanzamiento: string ='';
  public tipoGasto: string ='';
  public gastosList: interfazGastos[]=[];
  constructor(private GastoService: GastoService) { }

  ngOnInit() {
  }

  changeValue(value: any){
    console.log(value);
  }

  guardar(){
    this.results ='';
    if (this.monto!= null && this.lanzamiento!= null && this.selectedValue!= null && this.descripcion!= null && this.monto > 0 && this.descripcion!= '') {
      this.erResults = 'success';
      this.results = 'Tipo de Gasto: '+this.selectedValue+'; Monto: '+this.monto+ 'Lanzamiento: '+this.lanzamiento+'; Descripcion: '+this.descripcion;
      let gasto: interfazGastos = {
        descripcion: this.descripcion,
        tipo: this.selectedValue,
        monto: this.monto,
        lanzamiento: this.lanzamiento
      }
        this.GastoService.agregar(gasto);
        this.gastosList = this.GastoService.getGastos();
    } else {
      this.erResults ='danger';
      this.results ="ERROR: TODOS LOS CAMPOS SON OBLIGATORIOS, NO HA RELLENADO TODOS PARA GUARDAR";
    }
  }

  borrarGasto(gasto: interfazGastos){
    this.GastoService.borrarGasto(gasto);
    this.gastosList = this.GastoService.getGastos();
  }

}
