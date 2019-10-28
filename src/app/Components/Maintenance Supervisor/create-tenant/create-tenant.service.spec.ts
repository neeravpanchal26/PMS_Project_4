import { TestBed } from '@angular/core/testing';

import { CreateTenantService } from './create-tenant.service';

describe('CreateTenantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateTenantService = TestBed.get(CreateTenantService);
    expect(service).toBeTruthy();
  });
});
