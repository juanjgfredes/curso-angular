import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

@Component({
  selector: 'maps-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {

  @ViewChild("map") divMap?: ElementRef;
  @Input() lngLat?: [number, number];

  ngAfterViewInit(): void {
    if ( !this.divMap ) throw "el elemento HTML no existe";
    if ( !this.lngLat ) throw "lngLat no puede ser null";

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false,
      });

      new Marker()
      .setLngLat(this.lngLat)
      .addTo(map);

  }

}
