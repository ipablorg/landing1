import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { URL_SERVICIOS } from '../config/config' ;



import swal from 'sweetalert';
import { Router } from '@angular/router';
import { SubirArchivoService } from './subir-archivo.service';

import { map } from 'rxjs/operators';



@Injectable({
providedIn: 'root'
})
export class UsuariosService {

token = '' ;
usuario: Usuario;
menu: any[] = [];

constructor( private _http: HttpClient ,
             public router: Router ,
             public _subirArchivoService: SubirArchivoService ) {  }

// CONEXION CON EL BACKEND //


cargarStorage() {
  if ( localStorage.getItem('token')) {
  this.token = localStorage.getItem('token');
  this.usuario = JSON.parse( localStorage.getItem('usuario') );
  } else {
  this.token = '';
  this.usuario = null;
  }
  }

  EstaLogueado() {
    this.cargarStorage();
    return ( this.token.length > 5 ) ? true : false;
}


  guardarStorage( id: string, token: string, usuario: Usuario, menu: any ) {

    localStorage.setItem('id', id );
    localStorage.setItem('token', token );
    localStorage.setItem('usuario', JSON.stringify(usuario) );
    localStorage.setItem('menu', JSON.stringify(menu) );

    this.usuario = usuario;
    this.token = token;
    this.menu = menu;
  }

      logout() {
      this.usuario = null;
      this.token = '';
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      this.router.navigate(['/login']);
      }

// LOGUEAR UN USUARIO

        loginService( usuario: Usuario , recordame: boolean = false ) {
        if ( recordame ) { localStorage.setItem( 'email' , usuario.email ); } else {
        localStorage.removeItem( 'email');
        }
        const url = URL_SERVICIOS + '/login';
        return this._http.post( url , usuario ).pipe(
        map( (resp: any ) => {
        console.log( 'resp servicio:' , resp );
        localStorage.setItem( 'usuario' , JSON.stringify(resp.usuario) );
        localStorage.setItem( 'id' , resp.id );
        localStorage.setItem( 'token' , resp.token );
        }  )
        );
        }


// REGISTRAR UN USUARIO
crearUsuario( usuario: Usuario ) {
const url = URL_SERVICIOS + '/usuario';
return this._http.post( url , usuario ).pipe(
map( (resp: any) => {
swal( 'Usuario creado correctamente' , usuario.email , 'success'  );
console.log( 'resp servicio' , resp );
return resp ;
})
);
}

actualizarUsuario( usuario: Usuario ) {
let url = URL_SERVICIOS + '/usuario/' + usuario._id;
url += '?token=' + this.token;
return this._http.put( url, usuario ).pipe(  map( (resp: any) => {

if ( usuario._id === this.usuario._id ) {
const usuarioDB: Usuario = resp.usuario;
this.guardarStorage( usuarioDB._id, this.token, usuarioDB, this.menu );
}

swal('Usuario actualizado', usuario.nombre, 'success' );
return true;

}));

}


cambiarImagen( archivo: File, id: string ) {
this._subirArchivoService.subirArchivo( archivo, 'usuarios', id )
.then( (resp: any) => {
this.usuario.img = resp.usuario.img;
swal( 'Imagen Actualizada', this.usuario.nombre, 'success' );
this.guardarStorage( id, this.token, this.usuario, this.menu );
})
.catch( resp => {
console.log( resp );
}) ;
}

cargarUsuarios( desde: number = 0 ) {
const url = URL_SERVICIOS + '/usuario?desde=' + desde;
return this._http.get( url );
}

buscarUsuarios( termino: string ) {
const url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;
return this._http.get( url ).pipe( map( (resp: any) => resp.usuarios ));
}

borrarUsuario( id: string ) {
let url = URL_SERVICIOS + '/usuario/' + id;
url += '?token=' + this.token;
return this._http.delete( url ).pipe(   map( resp => {
swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
return true;
}));
}

}
