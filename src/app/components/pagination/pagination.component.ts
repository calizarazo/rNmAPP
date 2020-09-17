import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass'],
})
export class PaginationComponent implements OnInit {
  //definición del evento de salida
  //tipo EventEmitter para ser escuchado
  @Output() changePage: EventEmitter<any> = new EventEmitter<any>();
  //dato que se injecta al componente
  @Input() length;

  public pageSize = 20;
  public pageSizeOptions: number[] = [20];
  public pageEvent: PageEvent;

  constructor() {}

  ngOnInit(): void {}

  //evento que lanza el changePage con el que se cambia la página
  changePageController(event: PageEvent) {
    this.changePage.emit(event.pageIndex + 1);
  }
}
