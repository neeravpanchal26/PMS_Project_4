import { TestBed } from '@angular/core/testing';

import { UpdatePersonalInfoService } from './update-personal-info.service';

describe('UpdatePersonalInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatePersonalInfoService = TestBed.get(UpdatePersonalInfoService);
    expect(service).toBeTruthy();
  });
});
