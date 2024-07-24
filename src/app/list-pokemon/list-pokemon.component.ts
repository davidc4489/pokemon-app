import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [PokemonTypeColorPipe, CommonModule, BorderCardDirective],
  templateUrl: './list-pokemon.component.html',
  styles: ``
})
export class ListPokemonComponent {

  pokemonList : Pokemon[] = POKEMONS;

}
