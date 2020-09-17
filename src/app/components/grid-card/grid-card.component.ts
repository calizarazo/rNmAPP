import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTemplateComponent } from '../dialog-template/dialog-template.component';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.sass'],
})
export class GridCardComponent {
  //dato que se le injecta a GridCardComponent
  @Input() dataCharacter;

  constructor(public dialog: MatDialog) {}

  //función que muestra modal del personaje
  openDialog() {
    const dialogRef = this.dialog.open(DialogTemplateComponent, {
      data: this.dataCharacter,
      width: '700px',
    });
    //evento que se corre al cerrar el modal
    //sirve para retornar datos al componente padre
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
