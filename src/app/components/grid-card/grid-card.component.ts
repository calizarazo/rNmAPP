import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.sass'],
})
export class GridCardComponent {
  @Input() dataCharacter;

  constructor() {}
}
