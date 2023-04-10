import { TestBed } from '@angular/core/testing';

import { ScrollOnClickService } from './scroll-on-click.service';

describe('ScrollOnClickService', () => {
  let service: ScrollOnClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollOnClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
