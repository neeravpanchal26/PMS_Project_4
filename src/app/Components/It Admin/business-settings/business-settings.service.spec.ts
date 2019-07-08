import { TestBed } from '@angular/core/testing';

import { BusinessSettingsService } from './business-settings.service';

describe('BusinessSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessSettingsService = TestBed.get(BusinessSettingsService);
    expect(service).toBeTruthy();
  });
});
