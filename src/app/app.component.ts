import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'parcial1angular';
  nombre: string = '';
  nuevoNombre: string = '';
  mostrarNombre: boolean = false;
  listadoNombres: Array<string> = [];

  cambiarNombre() {
    if (this.nuevoNombre != '') {
      this.mostrarNombre = true;
      this.nombre = this.nuevoNombre;
      this.listadoNombres.push(this.nuevoNombre);
      if (this.listadoNombres.length > 10) {
        this.listadoNombres.shift();
      }
    } else {
      this.mostrarNombre = false;
      this.nombre = '';
    }
  }
}
