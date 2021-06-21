import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { filmes } from './app.models';
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
  title = 'Blockbuster';
  id!: any;
  lista!: filmes[];
  filme!: filmes[];
  quantidadeLista!: number;
  componentName!: filmes[];
  
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.listaFilmes();
    this.filme = [];
    this.componentName = [];
  }
  
  receberEvento(modificou:any): void{
   this.filme = [];
   this.id = modificou;
   this.procuraLista();
  }
  procuraLista(){
    this.filme = this.lista.filter(a => a.id == this.id);
  }
  listaFilmes(){
    this.appService.getFilmes().subscribe((filmes: filmes[]) => {
      this.lista = filmes;
      this.quantidadeLista = this.lista.length;
      });
  }
  novo(){
    this.filme = [];
  }
}
