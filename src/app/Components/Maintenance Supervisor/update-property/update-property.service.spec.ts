import { TestBed } from '@angular/core/testing';

import { UpdatePropertyService } from './update-property.service';

describe('UpdatePropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatePropertyService = TestBed.get(UpdatePropertyService);
    expect(service).toBeTruthy();
  });
});
