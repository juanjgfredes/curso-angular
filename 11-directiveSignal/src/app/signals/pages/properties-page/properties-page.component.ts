import { Component, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  });
  public userChangeEffect = effect( () => {
    console.log(this.user().first_name);
  }); // Cada vez q el user cambien se mostrara el efecto. Si cambio de componente se destruye solo
  //Si quiero destruirlo manualmente por algfuna otra razon es posible tambien

  onFieldUpdate(field: keyof User, value: string): void {

 /* this.user.set({
      ...this.user(),
      [field]: value,
    });

    this.user.update( current => {
      return {
        ...this.user(),
        [field]: value,
      }
    });
  */
    this.user.mutate( current => {
      switch(field) {

        case 'id':
          current.id = Number(value);
        break;

        case 'email':
          current.email = value;
        break;

        case 'first_name':
          current.first_name = value;
        break;

        case 'last_name':
          current.last_name = value;
        break;

        case 'avatar':
          current.avatar = value;
        break;

      }
    });
  }


}
