import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root',
})


export abstract class PokemonService {



   
   abstract getPokemonList(): Observable<Pokemon[]>;

   abstract getPokemonById(pokemonId: number): Observable<Pokemon>;

   abstract updatePokemon(pokemon: Pokemon): Observable<Pokemon>;
   abstract deletePokemon(pokemonId: number): Observable<void>;
   abstract addPokemon(pokemon: Omit<Pokemon, 'id'>): Observable<Pokemon>;
   abstract getPokemonTypeList(): string[];
}
