import { TestBed } from '@angular/core/testing';

import { MangadexApiService } from './Services/mangadex-api.service';

describe('MangadexApiService', () => {
  let service: MangadexApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangadexApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
