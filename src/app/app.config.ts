import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { PokemonService } from './pokemon/pokemon.service';

import { PokemonJSONServerService } from './pokemon-json-server.service';
import { PokemonLocalStorageService } from './pokemon-local-storage.service';

import { environment } from '../environments/environment';

export function pokemonServiceFactory(): PokemonService {

  return environment.production
    ? new PokemonLocalStorageService()
    : new PokemonJSONServerService();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    {
      provide: PokemonService,
      useFactory: pokemonServiceFactory
    }
  ]
};
