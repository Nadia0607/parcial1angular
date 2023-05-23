import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [AppComponent, BienvenidaComponent, ListadoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
