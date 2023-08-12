import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const cantBeStrider = ( control: FormControl ) => {
  const value: string = control.value.trim().toLowerCase();

  if ( value === 'strider' ) {
    return {
      noStrider: true
    }
  }

  return null;
}

export const fieldOneEqualFieldTwo = ( fieldNameUno: string, fieldNameDos: string ): ValidatorFn => {
  return ( group: AbstractControl ): ValidationErrors | null => {
    const fieldUno = group.get(fieldNameUno)?.value;
    const fieldDos = group.get(fieldNameDos)?.value;

    if ( fieldUno !== fieldDos ) {
      return {
        fieldEquals: true
      }
    }

    return null;
  }
}
