import { Component, OnInit } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';



@Component({
   selector: 'app-list-pokemon',
   imports: [BorderCardDirective, DatePipe, UpperCasePipe, PokemonTypeColorPipe],
   templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
   
   pokemonList: Pokemon[] = POKEMONS;

   constructor(private router: Router){}


   ngOninit(): void {
      console.table(this.pokemonList);
   }

   selectPokemon(pokemon: Pokemon) {
      this.router.navigate(['/pokemons/pokemon/', pokemon.id])
   }

   

}
