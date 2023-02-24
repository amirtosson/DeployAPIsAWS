import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDatasetsListComponent } from './dashboard-datasets-list.component';

describe('DashboardDatasetsListComponent', () => {
  let component: DashboardDatasetsListComponent;
  let fixture: ComponentFixture<DashboardDatasetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDatasetsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDatasetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
