import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  @Input() lista: Array<string> = [];
  disabledFlag: boolean = true;
}
