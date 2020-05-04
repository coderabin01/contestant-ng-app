import { TestBed } from '@angular/core/testing';

import { ContestantService } from './contestant.service';

describe('ContestantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContestantService = TestBed.get(ContestantService);
    expect(service).toBeTruthy();
  });
});
