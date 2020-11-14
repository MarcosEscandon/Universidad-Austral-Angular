import { DestinoViaje} from './destino-viaje.model';
import { AppState } from '../app.module';
import { Store } from '@ngrx/store';
import { ElegidoFavoritoAction, NuevoDestinoAction } from './destinos-viajes-state.model';
import { Injectable } from "@angular/core";

@Injectable() 
export class DestinosApiClient {
    getById(id: string): DestinoViaje {
      throw new Error('Method not implemented.');
    }
    constructor(private store: Store<AppState>) {
    }
    add(d:DestinoViaje) {
        this.store.dispatch(new NuevoDestinoAction(d)); 
    }    
    elegir(d: DestinoViaje) {
        this.store.dispatch(new ElegidoFavoritoAction(d));
    } 
}