import { TestBed } from '@angular/core/testing';

import { FetchServicesService } from './fetch-services.service';

describe('FetchServicesService', () => {
  let service: FetchServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
