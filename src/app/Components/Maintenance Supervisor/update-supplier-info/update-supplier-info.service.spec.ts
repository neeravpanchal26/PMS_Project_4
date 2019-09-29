import { TestBed } from '@angular/core/testing';

import { UpdateSupplierInfoService } from './update-supplier-info.service';

describe('UpdateSupplierInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateSupplierInfoService = TestBed.get(UpdateSupplierInfoService);
    expect(service).toBeTruthy();
  });
});
