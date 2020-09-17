import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CharactersService } from '../../services/characters/characters.service';
import { EpisodeInfoComponent } from '../episode-info/episode-info.component';

@Component({
  selector: 'app-dialog-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.sass'],
})
export class DialogTemplateComponent implements OnInit {
  public dataEpisode: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<DialogTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private characterServices: CharactersService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.setEpisodiesObj();
  }

  setEpisodiesObj() {
    let response = [];
    this.data.episode.map((episode) => {
      response.push({
        url: episode,
        number: episode.split('/')[episode.split('/').length - 1],
      });
    });

    this.dataEpisode = response;
  }

  showEpisodeInfo(data) {
    this.characterServices.GET(data.url).subscribe((info) => {
      const dialogRef = this.dialog.open(EpisodeInfoComponent, {
        data: info,
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    });
  }
}
