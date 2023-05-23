import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css'],
})
export class BienvenidaComponent {
  @Input() nombre: string = '';
  @Input() mostrarNombre: boolean = false;
}
