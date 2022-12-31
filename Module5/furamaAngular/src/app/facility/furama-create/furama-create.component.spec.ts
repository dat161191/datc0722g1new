import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaCreateComponent } from './furama-create.component';

describe('FuramaCreateComponent', () => {
  let component: FuramaCreateComponent;
  let fixture: ComponentFixture<FuramaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuramaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
