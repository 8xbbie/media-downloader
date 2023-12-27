import { TestBed } from '@angular/core/testing';

import { VideoRequesterService } from './video-requester.service';

describe('VideoRequesterService', () => {
  let service: VideoRequesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoRequesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
