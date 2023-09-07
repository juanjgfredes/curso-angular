import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(0);
  public counterSquare = computed( () => this.counter() * this.counter() ); //ES SOLO LECTURA

  increaseBy( value: number ) {
    this.counter.update( current => current + value)
  }
}
