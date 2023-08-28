import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  public price: number = 0;

  public inteval$?: Subscription;

  ngOnInit(): void {
    console.log("COMPONENTE HIJO: ngOnInit");
    this.inteval$ = interval(2000).subscribe( value => console.log(value) );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("COMPONENTE HIJO: ngOnChanges");
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log("COMPONENTE HIJO: ngOnDestroy");
    this.inteval$?.unsubscribe();
  }

}
