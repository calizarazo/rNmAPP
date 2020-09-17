import { Component, OnInit } from '@angular/core';
import { ICharacters, IResults } from 'src/app/interfaces/characters';
import { CharactersService } from 'src/app/services/characters/characters.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  //definición de variables
  public characters: IResults[];
  public items;
  public page = 1;
  public count;

  //elementos funcionales que usaremos
  constructor(private characterServices: CharactersService) {}

  //función inicial al renderizar el componente
  ngOnInit(): void {
    this.getCharactersPage(this.page);
  }

  //función que consulta el servicio para obtener todos los personajes
  getCharactersPage(page) {
    this.characterServices
      .getCharactersPaginator(page)
      .subscribe((listCharacters: ICharacters) => {
        this.characters = listCharacters.results;
        this.count = listCharacters.info.count;
        //construcción del arreglo "item"
        this.items = this.characters.map((item) => {
          return {
            id: item.id,
            image: item.image,
            name: item.name,
            headline: item.location.name,
            episode: item.episode,
            status: item.status,
            gender: item.gender,
            origin: item.origin.name,
            attributes: {
              name: 'Especie',
              value: item.species,
            },
            showDetail: true,
          };
        });
      });
  }
  //función que consulta el servicio al cambiar de página
  changePage(event) {
    this.getCharactersPage(event);
  }
}
