import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './component/header/cabecera/cabecera.component';
import { MenuComponent } from './component/varios/menu/menu.component';
import { CategoriasComponent } from './component/body/categorias/categorias.component';
import { PanelRComponent } from './component/varios/panel-r/panel-r.component';
import { FormularioCategoriaComponent } from './component/body/categorias/formulario-categoria/formulario-categoria.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    CategoriasComponent,
    PanelRComponent,
    FormularioCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
