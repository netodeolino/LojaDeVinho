import { TestBed, inject } from '@angular/core/testing';

import { VinhoService } from './vinho.service';

describe('VinhoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VinhoService]
    });
  });

  it('should be created', inject([VinhoService], (service: VinhoService) => {
    expect(service).toBeTruthy();
  }));
});
