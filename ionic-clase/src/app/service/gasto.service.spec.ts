import { TestBed } from '@angular/core/testing';

import { GastoService } from './gasto.service';

describe('GastoService', () => {
  let service: GastoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
