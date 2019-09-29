import { TestBed } from '@angular/core/testing';

import { ManageSupplierService } from './manage-supplier.service';

describe('ManageSupplierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageSupplierService = TestBed.get(ManageSupplierService);
    expect(service).toBeTruthy();
  });
});
