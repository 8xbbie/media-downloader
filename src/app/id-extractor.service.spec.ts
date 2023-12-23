import { TestBed } from '@angular/core/testing';

import { IdExtractorService } from './id-extractor.service';

describe('IdExtractorService', () => {
  let service: IdExtractorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdExtractorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
