import { TestBed } from '@angular/core/testing';

import { UserReportsService } from './user-reports.service';

describe('UserReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserReportsService = TestBed.get(UserReportsService);
    expect(service).toBeTruthy();
  });
});
