import { TestBed } from '@angular/core/testing';

import { CategoryrestservService } from './categoryrestserv.service';

describe('CategoryrestservService', () => {
  let service: CategoryrestservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryrestservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
