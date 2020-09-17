import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-episode-info',
  templateUrl: './episode-info.component.html',
  styleUrls: ['./episode-info.component.sass'],
})
export class EpisodeInfoComponent implements OnInit {
  //definición de datos que comunica el componente padre
  constructor(
    public dialogRef: MatDialogRef<EpisodeInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public dataEpisode: any
  ) {}

  ngOnInit(): void {
    console.log(this.dataEpisode);
  }
}
