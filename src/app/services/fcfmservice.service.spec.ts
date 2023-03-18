import { TestBed } from '@angular/core/testing';

import { FCFMServiceService } from './fcfmservice.service';

describe('FCFMServiceService', () => {
  let service: FCFMServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FCFMServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
