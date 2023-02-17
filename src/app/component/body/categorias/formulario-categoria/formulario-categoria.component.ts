import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/Categoria';
import { ConexionService } from 'src/app/service/conexion.service';

const ACTUALIZAR: string = "act";
const BORRAR: string = "del";
const INSERTAR: string = "ins";
const SALIR: string = "salir";

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html',
  styleUrls: ['./formulario-categoria.component.css']
})
export class FormularioCategoriaComponent {
  SALIR = SALIR;
  id: number = 0;
  opcion: string = "";
  boton: string = "";
  soloLectura: boolean = false;
  categoria: Categoria = { id_categoria: 0, cat_nombre: '', cat_descripcion: '' };

  constructor(private conexion: ConexionService, 
              private route: ActivatedRoute, 
              private router: Router) {
    this.getParam();
    if (this.id > 0) {
      console.log(this.id, this.opcion, this.boton)
      const dato: Observable<any> = this.conexion.leerApi('categorias/' + this.id);
      dato.subscribe(
        (resp: any) => {
          let stat: number = resp.status;
          if (stat == 1) {
            this.categoria = resp.data as Categoria;
          }
        })

      if (this.opcion == ACTUALIZAR) {
        this.boton = "Actualizar";
        this.soloLectura = false;
      }
      if (this.opcion == BORRAR) {
        this.boton = "Borrar";
        this.soloLectura = true;
      }

    }
    else {
      this.boton = "Añadir";
      this.opcion = INSERTAR;
      this.soloLectura = false;
    }
  }

  getParam(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.opcion = String(this.route.snapshot.paramMap.get('mod'));

  }


  deFormulario(trabajo: string) {
    switch (trabajo) {
      case SALIR:
          break;
      case ACTUALIZAR:
        let obsa: Observable<any> = this.conexion.putApi('categorias', this.categoria);
        obsa.subscribe(
          (resp: any) => {
            let stat: number = resp.status;
            if (stat == 1) {
              console.log("ok");
            } else {
              console.log("err");
            }
          })
        break;
      case BORRAR:
        let obsb: Observable<any> = this.conexion.deleteApi('categorias/'+ this.categoria.id_categoria);
        obsb.subscribe(
          (resp: any) => {
            let stat: number = resp.status;
            if (stat == 1) {
              console.log("ok");
            } else {
              console.log("err");
            }
          })
        break;
      case INSERTAR:
        let obs: Observable<any> = this.conexion.postApi('categorias', this.categoria);
        obs.subscribe(
          (resp: any) => {
            let stat: number = resp.status;
            if (stat == 1) {
              console.log("ok");
            } else {
              console.log("err");
            }
          })
        break;
    }
    this.router.navigateByUrl('/listaCategorias');
  }

  actualizar() {

  }

}

