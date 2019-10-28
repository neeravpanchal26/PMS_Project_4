import { TestBed } from '@angular/core/testing';

import { DashboardMaintenanceSupervisorService } from './dashboard-maintenance-supervisor.service';

describe('DashboardMaintenanceSupervisorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardMaintenanceSupervisorService = TestBed.get(DashboardMaintenanceSupervisorService);
    expect(service).toBeTruthy();
  });
});
