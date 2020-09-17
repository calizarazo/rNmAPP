import { Component, OnInit } from '@angular/core';
import { ICharacters, IResults } from 'src/app/interfaces/characters';
import { CharactersService } from 'src/app/services/characters/characters.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  public characters: IResults[];
  public items;
  public page = 1;
  public count;

  constructor(private characterServices: CharactersService) {
    this.getCharactersPage(this.page);
  }

  ngOnInit(): void {}

  getCharactersPage(page) {
    this.characterServices
      .getCharactersPaginator(page)
      .subscribe((listCharacters: ICharacters) => {
        this.characters = listCharacters.results;
        this.count = listCharacters.info.count;
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
        console.log(this.items);
      });
  }

  changePage(event) {
    this.getCharactersPage(event);
  }
}
