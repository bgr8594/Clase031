import { TestBed } from '@angular/core/testing';

import { AutserviceService } from './autservice.service';

describe('AutserviceService', () => {
  let service: AutserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
