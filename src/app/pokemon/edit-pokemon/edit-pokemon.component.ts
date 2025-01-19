import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
   selector: 'app-edit-pokemon',
   imports: [PokemonFormComponent],
   templateUrl: './edit-pokemon.component.html',
   styleUrl: './edit-pokemon.component.css'
})


export class EditPokemonComponent implements OnInit {
   pokemon: Pokemon | undefined;
   
   constructor(
      private route: ActivatedRoute,
      private pokemonService: PokemonService,
   ) {}


   ngOnInit(): void {
      const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

      if(pokemonId) {
         this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      }else {
         this.pokemon = undefined;
      }
   }

}
