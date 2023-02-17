import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './component/body/categorias/categorias.component';
import { FormularioCategoriaComponent } from './component/body/categorias/formulario-categoria/formulario-categoria.component';

const routes: Routes = [
  {path:'listaCategorias', component: CategoriasComponent},
  {path:'formCategoria/:id/:mod', component:FormularioCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
