import { TestBed } from '@angular/core/testing';

import { UpdateComplaintService } from './update-complaint.service';

describe('UpdateComplaintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateComplaintService = TestBed.get(UpdateComplaintService);
    expect(service).toBeTruthy();
  });
});
