import { Component, Inject, Injectable, InjectionToken, OnInit } from '@angular/core';
import { DestinosApiClient } from "./../../models/destinos-api-client.model";
import { DestinoViaje } from "./../../models/destino-viaje.model";
import { ActivatedRoute } from "@angular/router";
import { AppState } from 'src/app/app.module';
import { Store } from '@ngrx/store';

class DestinosApiClientViejo {
  getById(id: string): DestinoViaje {
    console.log('llamando por la clase vieja!');
    return null; 
  }
}
 
interface AppConfig {
  apiEndpoint: String;
}
const APP_CONFIG_VALUE: AppConfig = {
  apiEndpoint: 'mi_api.com'
};
const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

class DestinosApiClientDecorated extends DestinosApiClient {
  constructor(@Inject(APP_CONFIG) private config: AppConfig, store: Store<AppState>) {
    super(store)
  }
  getById(id: String): DestinoViaje {
    console.log('llamando por la clase decorada!');
    console.log('config ' + this.config.apiEndpoint),
    return super.getById(id);
  }
}

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.css'],
  providers: [
    {provide: APP_CONFIG, useValue: APP_CONFIG_VALUE},
    {provide: DestinosApiClient, useClass: DestinosApiClientDecorated},
    {provide: DestinosApiClientViejo, useExisting: DestinosApiClient}]
})
export class DestinoDetalleComponent implements OnInit {
  destino: DestinoViaje;

  constructor(private route: ActivatedRoute, private destinosApiClient: DestinosApiClientViejo) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.destino = this.destinosApiClient.getById(id);
  }

}
