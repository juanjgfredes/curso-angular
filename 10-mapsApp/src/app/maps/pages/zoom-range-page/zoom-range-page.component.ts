import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  @ViewChild("map") divMap?: ElementRef;

  public zoom: number = 2.80;
  public map?: Map;
  public lngLat: LngLat = new LngLat(-66.04129048667409, -36.007894149147205);

  ngAfterViewInit(): void {
    if ( !this.divMap ) throw "el elemento HTML no existe";

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      });

    this.mapListener();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListener(): void {
    if ( !this.map ) throw 'el mapa no existe'

    this.map.on('zoom', (e) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoom', (e) => {
      if ( this.map!.getZoom() < 18 ) return;

      this.map?.zoomTo(18);
    });

    this.map.on('move', () => {
      this.lngLat = this.map!.getCenter();
    });
  }

  zoomIn(): void {
    this.map?.zoomIn();
  }

  zoomOut(): void {
    this.map?.zoomOut()
  }

  zoomChange(value: string): void {
    this.zoom = Number(value);
    this.map?.zoomTo( this.zoom );
  }

}
