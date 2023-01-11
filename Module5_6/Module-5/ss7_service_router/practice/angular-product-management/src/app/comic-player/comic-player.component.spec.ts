import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicPlayerComponent } from './comic-player.component';

describe('ComicPlayerComponent', () => {
  let component: ComicPlayerComponent;
  let fixture: ComponentFixture<ComicPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
