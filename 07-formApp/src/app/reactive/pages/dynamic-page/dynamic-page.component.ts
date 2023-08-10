import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  // public myForm2: FormGroup = new FormGroup({
  //   favouriteGames: new FormArray([])
  // })

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)] ],
    favouriteGames: this.fb.array([
      ["Metal Geard Solid", Validators.required],
      ["Death Stranding", Validators.required]
    ])
  })

  public newFavorite = this.fb.control( "", Validators.required );

  constructor( private fb: FormBuilder ) {}

  get favouriteGames(): FormArray {
    return this.myForm.get("favouriteGames") as FormArray;
  }

  isValid( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  isValidArray( formArray: FormArray, index: number ): boolean | null {
    return formArray.controls[index].errors
      && formArray.controls[index].touched;
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

  onAddFavorite(): void {
    if( this.newFavorite.invalid ) return;

    const newFavoriteGame = this.newFavorite.value;
    this.favouriteGames.push( this.fb.control( newFavoriteGame, Validators.required ) );

   this.newFavorite.reset();
  }

  onDeleteFavorite( index: number ): void {
    this.favouriteGames.removeAt( index );
  }

  onSave(): void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();

      return;
    }

    console.log(this.favouriteGames);
    (this.myForm.controls["favouriteGames"] as FormArray) = this.fb.array([]);
    this.myForm.reset();
    this.newFavorite.reset();
  }
}
