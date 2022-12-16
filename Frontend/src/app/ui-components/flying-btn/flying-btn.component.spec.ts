import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingBtnComponent } from './flying-btn.component';

describe('FlyingBtnComponent', () => {
  let component: FlyingBtnComponent;
  let fixture: ComponentFixture<FlyingBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyingBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
