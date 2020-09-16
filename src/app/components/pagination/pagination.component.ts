import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass'],
})
export class PaginationComponent implements OnInit {
  @Output() changePage: EventEmitter<any> = new EventEmitter<any>();
  @Input() length;

  public pageSize = 20;
  public pageSizeOptions: number[] = [20];
  public pageEvent: PageEvent;

  constructor() {}

  ngOnInit(): void {}

  changePageController(event: PageEvent) {
    this.changePage.emit(event.pageIndex + 1);
  }
}
