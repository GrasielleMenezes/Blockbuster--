import { SimpleChanges } from '@angular/core';
import { ViewChild, ViewChildren } from '@angular/core';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { filmes } from '../app.models';
import { AppService } from '../app.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
 @Input() listaForm:any;
  constructor(private appService: AppService) {}
  
  ngOnInit() {
    
  }
  
  
}