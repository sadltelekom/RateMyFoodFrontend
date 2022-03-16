import { TestBed } from '@angular/core/testing';

import { PicturerestservService } from './picturerestserv.service';

describe('PicturerestservService', () => {
  let service: PicturerestservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicturerestservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
