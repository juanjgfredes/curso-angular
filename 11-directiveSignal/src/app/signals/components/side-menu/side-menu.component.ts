import { Component, signal } from '@angular/core';

interface MenuItem {
  tittle: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    { tittle: "Contador", router: "counter" },
    { tittle: "Info de usuario", router: "user-info" },
    { tittle: "Mutaciones", router: "properties" },
  ]);

  // public menuItems: MenuItem[]  = [
  //   { tittle: "Contador", router: "counter" },
  //   { tittle: "Info de usuario", router: "user-info" },
  //   { tittle: "Mutaciones", router: "properties" },
  // ]

}
