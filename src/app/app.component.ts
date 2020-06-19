import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpened = false;

  listTitles = [{
    trailer: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardião da Galaxia 1',
    relevance: 98,
    age: 0,
    parts: 2,
    categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
  },
  {
    trailer: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardião da Galaxia 2',
    relevance: 91,
    age: 16,
    parts: 2,
    categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
  },
  {
    trailer: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardião da Galaxia 3',
    relevance: 35,
    age: 18,
    parts: 2,
    categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
  }];

  setMenuState(state: boolean) {
    this.menuOpened = state;
  }

  closeMenu() {
    this.menuOpened = false;
  }
}
