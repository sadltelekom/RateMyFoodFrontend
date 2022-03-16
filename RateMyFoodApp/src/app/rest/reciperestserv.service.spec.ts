import { TestBed } from '@angular/core/testing';

import { ReciperestservService } from './reciperestserv.service';

describe('ReciperestservService', () => {
  let service: ReciperestservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciperestservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
