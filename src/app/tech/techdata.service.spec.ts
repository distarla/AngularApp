import { TestBed } from '@angular/core/testing';

import { TechdataService } from './techdata.service';

describe('TechdataService', () => {
  let service: TechdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
