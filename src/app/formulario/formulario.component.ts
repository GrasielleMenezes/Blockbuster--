import { EventEmitter, Output, SimpleChanges } from '@angular/core';
import { ViewChild, ViewChildren } from '@angular/core';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { AppService } from '../app.service';
import { FormGroup, FormControl } from '@angular/forms';
interface logar {nome:string, senha:string}

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  formUsuario!: FormGroup;
  @Output() evento = new EventEmitter<any>();
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.createForm({
      nome:"", senha:""
    });
  }

  createForm(usuario: logar) {
    this.formUsuario = new FormGroup({
      nome: new FormControl(usuario.nome),
      senha: new FormControl(usuario.senha)
    })
  }
  onSubmit() {
    
    
    this.enviarInformacao(this.formUsuario.value);
    this.formUsuario.reset({
      nome:"", senha:""
    });
  }
  enviarInformacao(event:any){
   
    this.evento.emit(event);
  }
  novo(){
    
    this.formUsuario.reset({
      nome:"", senha:""
    });
   
  }
}