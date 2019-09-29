import { TestBed } from '@angular/core/testing';

import { CreateSupplierService } from './create-supplier.service';

describe('CreateSupplierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateSupplierService = TestBed.get(CreateSupplierService);
    expect(service).toBeTruthy();
  });
});
