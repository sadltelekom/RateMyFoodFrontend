import { TestBed } from '@angular/core/testing';

import { RatingrestservService } from './ratingrestserv.service';

describe('RatingrestservService', () => {
  let service: RatingrestservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingrestservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
