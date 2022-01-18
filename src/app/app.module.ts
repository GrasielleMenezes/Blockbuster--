import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppBootstrapModule } from './app-bootstrap.module';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Rota1Component } from './rota/rota1/rota1.component';
import { Rota2Component } from './rota/rota2/rota2.component';


@NgModule({
  declarations: [
    AppComponent, FormularioComponent, Rota1Component, Rota2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
