import { EventEmitter, Output, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { filmes } from '../app.models';
import { AppService } from '../app.service';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  constructor(private appService: AppService) {}
  lista!: filmes[];
  @Output() alterar:EventEmitter<any> = new EventEmitter<any>();
  
  ngOnInit() {
    this.iniciaLista()
    
  }
  iniciaLista(){
    this.appService.getFilmes().subscribe((filmes: filmes[]) => {
      this.lista = filmes;
    });
  }
  selecionaLista(selecionado:any){
    this.alterar.emit(selecionado);
  }
}