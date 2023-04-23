import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

declare var google:any;

@Component({
  selector: 'app-radar',
  templateUrl: './radar.page.html',
  styleUrls: ['./radar.page.scss'],
})
export class RadarPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement!: ElementRef;
  map: any;
  constructor(private router: Router,private platform: Platform) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.initMap();
    });
  }

  initMap() {
    const mapOptions = {
      center: new google.maps.LatLng(25.727878, -100.313096),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  addMarker(event: any) {
    // Prevenir que el formulario se envíe
    event.preventDefault();
  
    // Obtener los valores del formulario
    const nombre = event.target.nombre.value;
    const direccion = event.target.direccion.value;
    const descripcion = event.target.descripcion.value;
  
    // Crear el geocoder para obtener las coordenadas de la dirección
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: direccion }, (results: { geometry: { location: any; }; }[], status: string) => {
      if (status === 'OK') {
        // Crear el marcador en la ubicación proporcionada
        const marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
          title: nombre
        });
  
        // Agregar información adicional al marcador
        const infowindow = new google.maps.InfoWindow({
          content: descripcion
        });
  
        // Mostrar el infowindow cuando se hace clic en el marcador
        marker.addListener('click', () => {
          infowindow.open(this.map, marker);
        });
      } else {
        // Mostrar un mensaje de error si no se pudo obtener la ubicación
        window.alert('No se pudo encontrar la ubicación proporcionada');
      }
    });
  
    // Limpiar el formulario
    event.target.reset();
  }

  gotoHome(){
    this.router.navigate(['/home'])
  }  

  gotoLogin(){
    this.router.navigate(['/login'])
  }

  gotoRegister(){
    this.router.navigate(['/register'])
  }

  gotoRadar(){
    this.router.navigate(['/radar'])
  }

  gotoAcount(){
    this.router.navigate(['/account'])
  }


}
