import { TestBed } from '@angular/core/testing';

import { AddPropertyService } from './add-property.service';

describe('AddPropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPropertyService = TestBed.get(AddPropertyService);
    expect(service).toBeTruthy();
  });
});
