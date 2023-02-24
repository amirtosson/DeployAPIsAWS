import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliaryFilesComponent } from './auxiliary-files.component';

describe('AuxiliaryFilesComponent', () => {
  let component: AuxiliaryFilesComponent;
  let fixture: ComponentFixture<AuxiliaryFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxiliaryFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliaryFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
