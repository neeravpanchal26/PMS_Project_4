import { TestBed } from '@angular/core/testing';

import { AssignComplaintService } from './assign-complaint.service';

describe('AssignComplaintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignComplaintService = TestBed.get(AssignComplaintService);
    expect(service).toBeTruthy();
  });
});
