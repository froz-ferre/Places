import { TestBed, inject } from '@angular/core/testing';

import { GooPlacesService } from './goo-places.service';

describe('GooPlacesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GooPlacesService]
    });
  });

  it('should be created', inject([GooPlacesService], (service: GooPlacesService) => {
    expect(service).toBeTruthy();
  }));
});
