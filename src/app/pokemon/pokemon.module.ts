import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';



const pokemonRoutes: Routes = [
   { path: 'edit/pokemons/pokemon/:id', component: EditPokemonComponent },
   { path: 'pokemons', component: ListPokemonComponent },
   { path: 'pokemons/pokemon/:id', component: DetailPokemonComponent }
];


@NgModule({
   declarations: [

   ],
   imports: [
      CommonModule,
      FormsModule,
      ListPokemonComponent,
      DetailPokemonComponent,
      RouterModule.forChild(pokemonRoutes),
      
   ],
})


export class PokemonModule { }
