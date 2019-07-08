import { TestBed } from '@angular/core/testing';

import { ManageOwnerService } from './manage-owner.service';

describe('ManageOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageOwnerService = TestBed.get(ManageOwnerService);
    expect(service).toBeTruthy();
  });
});
