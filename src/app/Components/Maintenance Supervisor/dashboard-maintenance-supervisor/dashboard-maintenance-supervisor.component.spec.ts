import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMaintenanceSupervisorComponent } from './dashboard-maintenance-supervisor.component';

describe('DashboardMaintenanceSupervisorComponent', () => {
  let component: DashboardMaintenanceSupervisorComponent;
  let fixture: ComponentFixture<DashboardMaintenanceSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMaintenanceSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMaintenanceSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
