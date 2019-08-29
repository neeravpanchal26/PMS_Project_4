import { TestBed } from '@angular/core/testing';

import { AssignPropertyService } from './assign-property.service';

describe('AssignPropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignPropertyService = TestBed.get(AssignPropertyService);
    expect(service).toBeTruthy();
  });
});
