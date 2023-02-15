import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from '../interface/personaje';
import { EnvioReceptorService } from '../service/envio-receptor.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user: Personaje = {name:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"};
  list: Personaje[]=
  [
    {name:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"},
    {name:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"},
    {name:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"}
  ];

  constructor(
    private router: Router,
    private envioReceptor: EnvioReceptorService) { }

  ngOnInit() {
  }

  gotReceiver(){
    this.envioReceptor.sendObjectSource(this.user);
    this.envioReceptor.sendListSource(this.list);

    this.router.navigate(['/receptor']);
  }

}
