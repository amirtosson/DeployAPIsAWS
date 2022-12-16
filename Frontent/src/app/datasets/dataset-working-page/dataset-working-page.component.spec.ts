import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetWorkingPageComponent } from './dataset-working-page.component';

describe('DatasetWorkingPageComponent', () => {
  let component: DatasetWorkingPageComponent;
  let fixture: ComponentFixture<DatasetWorkingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetWorkingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetWorkingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
