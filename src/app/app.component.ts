import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({              // Permet de construire un composant web
  selector: 'app-root',   // Permet de donner un nom au composant afin de l'identifier
  standalone: true,
  templateUrl: 'app.component.html',  // Permet de definir le contenu html du composant
  imports: [CommonModule, RouterOutlet],
  styles: []
})

export class AppComponent {}












// Version Tutoriel

// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

// import { POKEMONS } from './mock-pokemon-list';
// import { Pokemon } from './pokemon';
// import { BorderCardDirective } from './border-card.directive';
// import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

// export class AppComponent implements OnInit {
  // pokemonList : Pokemon[] = POKEMONS;
  // pokemonSelected : Pokemon | undefined ;

  // ngOnInit(): void {
    // console.table(this.pokemonList) ;
  // }

  // selectPokemon(event : MouseEvent) {
  //   const index : number = Number((event.target as HTMLInputElement).value) ;
  //   if(index < 12 && index >= 0) {
  //     console.log(`You clicked on the pokemon ${this.pokemonList[index].name}`)
  //   }
  // }

  // selectPokemon2(pokemonId : string) {
  //   const pokemon : Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
  //   if(pokemon) {
  //     console.log(`You clicked on the pokemon ${pokemon.name}`)
  //     this.pokemonSelected = pokemon
  //   }
  //   else {
  //     console.log("Index out of range")
  //     this.pokemonSelected = undefined
  //   }
  // }
// }
