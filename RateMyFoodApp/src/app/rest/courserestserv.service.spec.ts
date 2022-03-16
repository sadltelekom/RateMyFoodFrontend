import { TestBed } from '@angular/core/testing';

import { CourserestservService } from './courserestserv.service';

describe('CourserestservService', () => {
  let service: CourserestservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourserestservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
