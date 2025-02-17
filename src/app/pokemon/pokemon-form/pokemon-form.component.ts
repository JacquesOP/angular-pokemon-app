import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { FormsModule } from '@angular/forms';


 

@Component({
   selector: 'app-pokemon-form',
   imports: [PokemonTypeColorPipe, FormsModule],
   templateUrl: './pokemon-form.component.html',
   styleUrl: './pokemon-form.component.css'
})



export class PokemonFormComponent implements OnInit {

   @Input() pokemon: Pokemon;

   types: string[];

   constructor(
      private pokemonService: PokemonService, 
      private router: Router
   ) { }

   
   ngOnInit() {
      // pokemonTypeList
      this.types = this.pokemonService.getPokemonTypeList();
   }

   hasType(type: string): boolean {

      return this.pokemon.types.includes(type);
   }

   selectType($event: Event, type: string) {
      const isChecked = ($event.target as HTMLInputElement).checked;

      if(isChecked) {
         this.pokemon.types.push(type);
      }else {
         const index = this.pokemon.types.indexOf(type);
         this.pokemon.types.splice(index, 1);
      }
   }

   isTypesValid(type: string): boolean {

      if(this.pokemon.types.length === 1 && this.hasType(type)) {
         return false;
      }

      if(this.pokemon.types.length > 2 && !this.hasType(type)) {
         return false;
      }



      return true;
   }

   onSubmit() {
      console.log('Submit form !');
      this.pokemonService.updatePokemon(this.pokemon)
         .subscribe((pokemon) => {
            if(pokemon){
               this.router.navigate(['/pokemons/pokemon', pokemon.id]);
            }
         })
      
   }
}
