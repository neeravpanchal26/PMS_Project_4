import { TestBed } from '@angular/core/testing';

import { UpdateOwnerInfoService } from './update-owner-info.service';

describe('UpdateOwnerInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateOwnerInfoService = TestBed.get(UpdateOwnerInfoService);
    expect(service).toBeTruthy();
  });
});
