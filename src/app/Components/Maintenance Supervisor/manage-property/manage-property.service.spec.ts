import { TestBed } from '@angular/core/testing';

import { ManagePropertyService } from './manage-property.service';

describe('ManagePropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagePropertyService = TestBed.get(ManagePropertyService);
    expect(service).toBeTruthy();
  });
});
