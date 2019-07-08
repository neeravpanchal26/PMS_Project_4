import { TestBed } from '@angular/core/testing';

import { CreateOwnerService } from './create-owner.service';

describe('CreateOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateOwnerService = TestBed.get(CreateOwnerService);
    expect(service).toBeTruthy();
  });
});
