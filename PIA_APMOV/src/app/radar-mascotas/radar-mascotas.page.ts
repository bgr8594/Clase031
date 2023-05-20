import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { url } from 'inspector';

declare var google: any;

@Component({
  selector: 'app-radar-mascotas',
  templateUrl: './radar-mascotas.page.html',
  styleUrls: ['./radar-mascotas.page.scss'],
})
export class RadarMascotasPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement!: ElementRef;
  map: any;

  constructor(private platform: Platform, private router: Router, private navCtrl: NavController, private storage: Storage,
  ) { }
  menuType: string = 'overlay';

  marker: any;
  direccion: any;
  mascotas: any[] = [];

  svgMarker = {
    path: "M240,108a28,28,0,1,1-28-28A28.1,28.1,0,0,1,240,108ZM72,108a28,28,0,1,0-28,28A28.1,28.1,0,0,0,72,108ZM92,88A28,28,0,1,0,64,60,28.1,28.1,0,0,0,92,88Zm72,0a28,28,0,1,0-28-28A28.1,28.1,0,0,0,164,88Zm23.1,60.8a35.3,35.3,0,0,1-16.9-21.1,43.9,43.9,0,0,0-84.4,0A35.5,35.5,0,0,1,69,148.8,40,40,0,0,0,88,224a40.5,40.5,0,0,0,15.5-3.1,64.2,64.2,0,0,1,48.9-.1A39.6,39.6,0,0,0,168,224a40,40,0,0,0,19.1-75.2Z",
    fillColor: "red",
    fillOpacity: 1,
    strokeWeight: 2,
    rotation: 0,
    scale: 0.2,
    anchor: new google.maps.Point(0, 20),
  };

  ngOnInit() {
    this.mascotas = JSON.parse(localStorage.getItem("Mascotas") || "[]");
    console.log(this.mascotas)
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

    this.mascotas.forEach((mascota) => {
      this.addMarker(mascota.latitud, mascota.longitud, mascota.nombreMascota)

    });

  }

  addMarker(latitud: string, longitud: string, nombreMascota: string) {
    this.marker = new google.maps.Marker({
      position: { lat: parseFloat(latitud), lng: parseFloat(longitud) },
      icon: this.svgMarker,
      map: this.map,
      title: nombreMascota
    });
  }


}
