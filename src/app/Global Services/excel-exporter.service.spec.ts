import { TestBed } from '@angular/core/testing';

import { ExcelExporterService } from './excel-exporter.service';

describe('ExcelExporterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcelExporterService = TestBed.get(ExcelExporterService);
    expect(service).toBeTruthy();
  });
});
