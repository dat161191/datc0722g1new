import { TestBed } from '@angular/core/testing';

import { DictinonaryService } from './dictinonary.service';

describe('DictinonaryService', () => {
  let service: DictinonaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictinonaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
