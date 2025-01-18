import { Component, OnInit } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';


@Component({
   selector: 'app-detail-pokemon',
   imports: [DatePipe, UpperCasePipe, PokemonTypeColorPipe],
   templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent {

   pokemonList: Pokemon[];
   pokemon: Pokemon | undefined;

   constructor(private route: ActivatedRoute, private router: Router) { }

   ngOnInit() {
      this.pokemonList = POKEMONS;
      const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
      
      if(pokemonId) {
         this.pokemon = this.pokemonList.find(pokemon => pokemon.id === +pokemonId);
      }
   }

   goToPokemonList() {
      this.router.navigate(['/pokemons']);
   }



}
