import { TestBed } from '@angular/core/testing';

import { MaintenanceReportsService } from './maintenance-reports.service';

describe('MaintenanceReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaintenanceReportsService = TestBed.get(MaintenanceReportsService);
    expect(service).toBeTruthy();
  });
});
