import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl("", [], []),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  public myForm: FormGroup = this.fb.group({
    name: ["", [ Validators.required, Validators.minLength(3) ] ],
    price: [0, [ Validators.required, Validators.min(0) ] ],
    inStorage: [0, [ Validators.required, Validators.min(0) ]],
  });

  constructor( private fb: FormBuilder ) {}

  isValid( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  getFieldError( field: string ): string | null {
    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for ( const error of Object.keys(errors) ) {
      switch ( error ) {
        case 'required':
          return 'Este campo es obligatorio.'
        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength } caracteres.`
      }
    }

    return null;
  }

  onSave(): void {

    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();

      return;
    }

    console.log(this.myForm.value)

    this.myForm.reset({
      name: "",
      price: 0,
      inStorage: 0,
    });
  }

}
