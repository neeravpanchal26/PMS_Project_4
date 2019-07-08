import { TestBed } from '@angular/core/testing';

import { DashboardItTechnicianService } from './dashboard-it-technician.service';

describe('DashboardItTechnicianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardItTechnicianService = TestBed.get(DashboardItTechnicianService);
    expect(service).toBeTruthy();
  });
});
