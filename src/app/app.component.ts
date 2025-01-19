import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonModule } from './pokemon/pokemon.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PokemonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {}
