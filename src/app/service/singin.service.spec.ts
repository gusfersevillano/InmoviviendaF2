import { TestBed } from '@angular/core/testing';

import { SinginService } from './singin.service';

describe('SinginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SinginService = TestBed.get(SinginService);
    expect(service).toBeTruthy();
  });
});
