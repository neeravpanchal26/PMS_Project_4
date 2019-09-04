import { TestBed } from '@angular/core/testing';

import { ReportComplaintService } from './report-complaint.service';

describe('ReportComplaintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportComplaintService = TestBed.get(ReportComplaintService);
    expect(service).toBeTruthy();
  });
});
