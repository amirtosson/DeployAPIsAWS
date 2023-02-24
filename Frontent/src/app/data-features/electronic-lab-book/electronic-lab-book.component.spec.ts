import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicLabBookComponent } from './electronic-lab-book.component';

describe('ElectronicLabBookComponent', () => {
  let component: ElectronicLabBookComponent;
  let fixture: ComponentFixture<ElectronicLabBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicLabBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicLabBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
