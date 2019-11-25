import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login-artist',
  templateUrl: './login-artist.component.html',
  styles: []
})
export class LoginArtistComponent implements OnInit {

  email: string;
  recuerdame = false;

  auth2: any;

  constructor(
    public router: Router,
    public _usuarioService: UsuariosService
  ) { }

  ngOnInit() {


    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1 ) {
      this.recuerdame = true;
    }

  }


  ingresar( forma: NgForm) {

    if ( forma.invalid ) {
      return;
    }

    const usuario = new Usuario(null, forma.value.email, forma.value.password );

    this._usuarioService.loginService( usuario, forma.value.recuerdame )
    .subscribe( correcto => this.router.navigate(['fan'])  );

    // this.router.navigate([ '/dashboard' ]);

  }
}
