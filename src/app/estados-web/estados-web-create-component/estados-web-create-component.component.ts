import { Component,Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estados-web-create-component',
  templateUrl: './estados-web-create-component.component.html',
  styleUrls: ['./estados-web-create-component.component.css']
})
export class EstadosWebCreateComponentComponent implements OnInit {

  idsitio:number;

  constructor() {}

  ngOnInit() {
  }


  createEstadoWeb( site:number ):void
  {
    this.idsitio=site;
  }
}
