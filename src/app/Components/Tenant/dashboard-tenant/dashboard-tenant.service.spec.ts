import { TestBed } from '@angular/core/testing';

import { DashboardTenantService } from './dashboard-tenant.service';

describe('DashboardTenantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardTenantService = TestBed.get(DashboardTenantService);
    expect(service).toBeTruthy();
  });
});
