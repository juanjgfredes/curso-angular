import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { emailValidator, emailValidatorObservable } from 'src/app/shared/validators/email-validator.async.validator';
import { cantBeStrider, emailPattern, fieldOneEqualFieldTwo, firstNameAndLastnamePattern } from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {


  public myForm: FormGroup = this.fb.group({
    name: [ "", [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)] ],
    email: [ "", [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [emailValidatorObservable()] ],
    username: [ "", [ Validators.required, this.validatorService.cantBeStrider ] ],
    password: [ "", [ Validators.required, Validators.minLength(6) ] ],
    password2: [ "", [ Validators.required, Validators.minLength(6) ] ],
  }, {
    validators: [fieldOneEqualFieldTwo( "password", "password2" )]
  });

  constructor (
    private fb: FormBuilder,
    private validatorService: ValidatorsService,
  ) {}

    isValid( field: string ): boolean | null {
      return this.validatorService.isValid( this.myForm, field );
    }

  onSave(): void {
    this.myForm.markAllAsTouched();
  }
}
