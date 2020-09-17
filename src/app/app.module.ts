import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LayoutComponent } from './components/layout/layout.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DialogTemplateComponent } from './components/dialog-template/dialog-template.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { EpisodeInfoComponent } from './components/episode-info/episode-info.component';
import { DialogEpisodeComponent } from './components/dialog-episode/dialog-episode.component';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GridCardComponent,
    PaginationComponent,
    DialogTemplateComponent,
    EpisodeInfoComponent,
    DialogEpisodeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
