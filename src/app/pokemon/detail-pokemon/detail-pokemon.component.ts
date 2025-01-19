import { Component, OnInit } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonService } from '../pokemon.service';
import { BorderCardDirective } from '../border-card.directive';

@Component({
   selector: 'app-detail-pokemon',
   imports: [DatePipe, UpperCasePipe, PokemonTypeColorPipe],
   templateUrl: './detail-pokemon.component.html',
   styleUrls: ['./detail-pokemon.component.css']
})

export class DetailPokemonComponent implements OnInit {
   pokemonList: Pokemon[];
   pokemon: Pokemon | undefined;

   constructor(
      private route: ActivatedRoute,
      private router: Router,
      private pokemonService: PokemonService
   ) { }


   ngOnInit() {
      const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

      if (pokemonId) {
         this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      }

   }


   goToPokemonList() {
      this.router.navigate(['/pokemons']);
   }

   goToEditPokemon(pokemon: Pokemon) {
      this.router.navigate(['/edit/pokemons/pokemon', pokemon.id]);
   }
}
