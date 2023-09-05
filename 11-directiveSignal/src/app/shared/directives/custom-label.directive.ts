import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;

  private _color: string = "red";

  private _errros?: ValidationErrors | null;

  @Input() set color ( value: string ) {
    this._color = value;
    this.changeColor()
  }

  @Input() set errors ( value: ValidationErrors | null | undefined ) {
    this._errros = value;
    this.setErrorsMessage();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;

    this.htmlElement.nativeElement.innerHTML = "Hola Mundo!"
  }
  ngOnInit(): void {
    console.log("Ng On init")
    this.changeColor()
  }

  changeColor(): void {
    if ( !this.htmlElement ) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorsMessage(): void {
    if ( !this.htmlElement ) return;
    if ( !this._errros ) {
      this.htmlElement.nativeElement.innerHTML = ""
      return;
    }

    const errosKey = Object.keys(this._errros);

    if ( errosKey.includes('required') ) {
      this.htmlElement.nativeElement.innerHTML = "El campo es requerido"
      return;
    }
    if ( errosKey.includes('minlength') ) {
      const min = this._errros["minlength"]["requiredLength"];
      const actual = this._errros["minlength"]["actualLength"];
      this.htmlElement.nativeElement.innerHTML = `El campo debe tener un minimo de ${ min } caracteres, actualmente tiene ${ actual }`
      return;
    }
    if ( errosKey.includes('email') ) {
      this.htmlElement.nativeElement.innerHTML = "El campo debe ser un email valido"
      return;
    }


  }

}
