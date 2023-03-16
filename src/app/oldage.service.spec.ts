import { TestBed } from '@angular/core/testing';

import { OldageService } from './oldage.service';

describe('OldageService', () => {
  let service: OldageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
