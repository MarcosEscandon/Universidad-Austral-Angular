import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
import {  } from "./../models/destinos-api-client.model";

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})

export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;  

  constructor(private destinoApiClient:DestinosApiClient) {
  	this.onItemAdded = new EventEmitter();
  	 }

   ngOnInit() {   
   }

  agregado(d: DestinoViaje) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
}

elegido(e:DestinoViaje) {
  this.destinoApiClient.getAll().forEach(x => x.setSelected(false));
  e.setSelected(true);
}  

}
