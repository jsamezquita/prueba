import { Component, OnInit } from '@angular/core';
import { EstadoWeb } from '../estadoWeb';
import { EstadosWebService } from '../estados-web.service';

import {st} from "@angular/core/src/render3";
import {Observable, Subscription} from "rxjs";


@Component({
  selector: 'app-estados-web-list',
  templateUrl: './estados-web-list.component.html',
  styleUrls: ['./estados-web-list.component.css']
})
export class EstadosWebListComponent  implements  OnInit{

  displayedColumns: string[] = ['id', 'estado', 'descripcion', 'fecha',];

  constructor(private estadosWebService: EstadosWebService) { }

  estadosWeb : EstadoWeb[] ;

  subscription:Subscription;
  mustkill:boolean;

  getEstadosWeb(sitio:number): void {

    this.subscription = this.estadosWebService.getEstadosSitio(sitio).subscribe(estados =>
        this.estadosWeb = estados);
  }

  kill():void
  {
    console.log(`killing subscription ${this.subscription}`);
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.mustkill=false;
  }
}