import { inject, Injectable } from '@angular/core';
import { Pokemon, PokemonList } from './pokemon/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
   PokemonService

} from './pokemon/pokemon.service';


@Injectable({
   providedIn: 'root'
})


export class PokemonJSONServerService implements PokemonService {

   private readonly http = inject(HttpClient);
   private readonly POKEMON_API_URL = 'http://localhost:3000/pokemons';


   // Retour de la liste des pokémons
   getPokemonList(): Observable<PokemonList> {
      return this.http.get<PokemonList>(this.POKEMON_API_URL);
   }

   // Retourne le pokémon avec l'identifiant passé en paramètre
   getPokemonById(id: number): Observable<Pokemon> {
      return this.http.get<Pokemon>(`${this.POKEMON_API_URL}/pokemon/${id}`);
   }

   // Met a jour un pokemon existant
   updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
      return this.http.put<Pokemon>(`${this.POKEMON_API_URL}/pokemon/${pokemon.id}`, pokemon);
   }

   // supprime un pokemon
   deletePokemon(pokemonId: number): Observable<void> {
      return this.http.delete<void>(`${this.POKEMON_API_URL}/pokemon/${pokemonId}`);
   }

   // Ajoute un nouveau pokemon
   addPokemon(pokemon: Omit<Pokemon, 'id'>): Observable<Pokemon> {
      return this.http.post<Pokemon>(`${this.POKEMON_API_URL}/pokemon`, pokemon);
   }

   // Retourne la liste des types de pokémons
   getPokemonTypeList(): string[] {
      return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
   }

}
