import { TestBed } from '@angular/core/testing';

import { IngredientrestservService } from './ingredientrestserv.service';

describe('IngredientrestservService', () => {
  let service: IngredientrestservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientrestservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
