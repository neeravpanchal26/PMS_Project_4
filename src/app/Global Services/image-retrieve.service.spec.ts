import { TestBed } from '@angular/core/testing';

import { ImageRetrieveService } from './image-retrieve.service';

describe('ImageRetrieveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageRetrieveService = TestBed.get(ImageRetrieveService);
    expect(service).toBeTruthy();
  });
});
