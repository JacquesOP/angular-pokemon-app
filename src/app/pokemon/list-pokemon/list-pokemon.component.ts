import { Component, OnInit } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

import { Pokemon } from '../pokemon';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonService } from '../pokemon.service';

@Component({
   selector: 'app-list-pokemon',
   imports: [BorderCardDirective, DatePipe, UpperCasePipe, PokemonTypeColorPipe],
   templateUrl: './list-pokemon.component.html',
})



export class ListPokemonComponent implements OnInit {

   
   title: string = 'Pokemons';
   pokemonList: Pokemon[];


   constructor(
      private router: Router,
      private pokemonService: PokemonService
   ) { }


   ngOnInit() {
      this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonList = pokemonList);
   }

   selectPokemon(pokemon: Pokemon) {
      this.router.navigate(['/pokemons/pokemon/', pokemon.id]);
   }
}
