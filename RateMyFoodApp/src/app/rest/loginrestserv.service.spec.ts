import { TestBed } from '@angular/core/testing';

import { LoginrestservService } from './loginrestserv.service';

describe('LoginrestservService', () => {
  let service: LoginrestservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginrestservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
