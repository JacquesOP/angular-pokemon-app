import { TestBed } from '@angular/core/testing';

import { PokemonJsonServerService } from './pokemon-json-server.service';

describe('PokemonJsonServerService', () => {
  let service: PokemonJsonServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonJsonServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
