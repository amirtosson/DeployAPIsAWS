import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExperimentsListComponent } from './dashboard-experiments-list.component';

describe('DashboardExperimentsListComponent', () => {
  let component: DashboardExperimentsListComponent;
  let fixture: ComponentFixture<DashboardExperimentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardExperimentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardExperimentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
