import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, delay, of } from "rxjs";


export const emailValidator = (): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const email = control.value;
    console.log( {email} )
    return of({
      emailTaken: true,
    })
  }
}

export const emailValidatorObservable = (): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const email = control.value;
    const httpCallObservable = new Observable<ValidationErrors | null>( (subscribe) => {

      if ( email === 'juan@gmail.com') {
        subscribe.next({
          emailTake: true
        });
      } else {
        subscribe.next( null );
      }
      subscribe.complete();

    }).pipe(
      delay(3000)
    );

    return httpCallObservable;
  }
}

export const emailValidatorWithoutFn = (control: AbstractControl): Observable<ValidationErrors | null> => {
    const email = control.value;
    console.log( {email} )
    return of({
      emailTaken: true,
    })
  }
