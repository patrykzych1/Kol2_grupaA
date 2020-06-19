import { TestBed } from '@angular/core/testing';

import { PZDataService } from './pz-data.service';

describe('PZDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PZDataService = TestBed.get(PZDataService);
    expect(service).toBeTruthy();
  });
});
