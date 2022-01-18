import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { usuariosDB } from './app.models';
import { AppService } from './app.service';
import { EventEmitter, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  senha!: string;
  login!:string;
  usuario!: any;
  usuarios!: usuariosDB[];
  nome:string = "";
  rotas = [];
 
  
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getUsuario();
    this.novo();
   
  }
  
 
  procuraUsuario(usuario:any){
    
    const mapped = Object.entries(this.usuarios).map(([type, value]) => ({type, value}));
    this.usuario = mapped.filter(a => a.type == usuario.nome && a.value.senha == usuario.senha);
    if(this.usuario.length != 0){
      alert("Usuário Logado");
      
      this.nome = this.usuario[0].value.nome;
      this.rotas = this.usuario[0].value.rotas;
     
    }
    else{
      alert("Erro nas credenciais");
      
    }
    
  }
  getUsuario(){
    this.appService.getUsuarios().subscribe((usuarios: usuariosDB[]) => {
      this.usuarios = usuarios;
      
      });
  }
  novo(){
    this.usuario = [];
   this.nome = "";
    this.senha = "";
    this.login = "";
    this.rotas = [];
   
  }
  recebeInformacao(usuario:any){
    
    this.usuario = {
      nome: usuario.nome,
      senha:usuario.senha
    }
    this.procuraUsuario(this.usuario);
  }
  
}
