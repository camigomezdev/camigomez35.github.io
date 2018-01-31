import { TestBed, inject } from '@angular/core/testing';

import { GhService } from './ghservice.service';

describe('GhserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GhService]
    });
  });

  it('should be created', inject([GhService], (service: GhService) => {
    expect(service).toBeTruthy();
  }));
});
