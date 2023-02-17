import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/Categoria';
import { ConexionService } from 'src/app/service/conexion.service';



@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  listado: Categoria[] = [];
  constructor(private conexion: ConexionService) {
    const dato: Observable<any> = this.conexion.leerApi('categorias');

    dato.subscribe(
      (resp: any) => {
      let stat:number = resp.status;      
      if (stat==1){
        this.listado = resp.data as Categoria[];
      }
    })
  }
  
}
