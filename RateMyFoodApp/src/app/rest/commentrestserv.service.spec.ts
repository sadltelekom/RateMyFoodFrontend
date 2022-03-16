import { TestBed } from '@angular/core/testing';

import { CommentrestservService } from './commentrestserv.service';

describe('CommentrestservService', () => {
  let service: CommentrestservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentrestservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
