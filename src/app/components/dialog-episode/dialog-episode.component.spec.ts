import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEpisodeComponent } from './dialog-episode.component';

describe('DialogEpisodeComponent', () => {
  let component: DialogEpisodeComponent;
  let fixture: ComponentFixture<DialogEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEpisodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
