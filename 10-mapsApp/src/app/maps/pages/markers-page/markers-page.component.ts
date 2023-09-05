import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  marker: Marker,
  color: string,
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements AfterViewInit {

  @ViewChild("map") divMap?: ElementRef;

  public zoom: number = 13.34 ;
  public map?: Map;
  public lngLat: LngLat = new LngLat(-68.8440573159096, -32.88815429861813);
  public markers: MarkerAndColor[] = [];

  ngAfterViewInit(): void {
    if ( !this.divMap ) throw "el elemento HTML no existe";

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      });

    this.readFromLocalStorage();
    // const htmlMarker = document.createElement('div');
    // htmlMarker.innerHTML = "Juan Fredes"

    // const marker = new Marker(
    //   //{ color: 'red'},
    //   htmlMarker
    // )
    //   .setLngLat( this.lngLat )
    //   .addTo( this.map );
  }

  createMarker(): void{
    if ( !this.map ) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarcker( lngLat, color );
  }

  addMarcker(lngLat: LngLat, color: string): void {
    if ( !this.map ) return;

    const marker = new Marker(
      { color: color, draggable: true }
    )
    .setLngLat( lngLat )
    .addTo( this.map );

    this.markers?.push({marker, color});
    this.saveToLocalStorage();

    marker.on('dragend', () => this.saveToLocalStorage() );
  }

  deleteMarker( index: number ) {
    this.markers[index].marker.remove();
    this.markers.splice( index, 1 );
    this.saveToLocalStorage();
  }

  flyTo( marker: Marker ): void {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat(),
    });
  }

  saveToLocalStorage(): void {
    const plainMarker: PlainMarker[] = this.markers.map( ({color, marker}) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray(),
      }
    });

    localStorage.setItem('plainsMarkers', JSON.stringify(plainMarker));
  }

  readFromLocalStorage(): void {
    const plainMarkerString = localStorage.getItem('plainsMarkers') ?? '[]';
    const plainsMarker: PlainMarker[] =  JSON.parse(plainMarkerString);

    plainsMarker.forEach( ({color, lngLat}) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);
      this.addMarcker(coords, color);
    });
  }

}
