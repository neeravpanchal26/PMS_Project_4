import { TestBed } from '@angular/core/testing';

import { ComplaintStatusTrackService } from './complaint-status-track.service';

describe('ComplaintStatusTrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComplaintStatusTrackService = TestBed.get(ComplaintStatusTrackService);
    expect(service).toBeTruthy();
  });
});
