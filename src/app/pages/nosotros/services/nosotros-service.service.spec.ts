import { TestBed } from '@angular/core/testing';

import { NosotrosServiceService } from './nosotros-service.service';

describe('NosotrosServiceService', () => {
  let service: NosotrosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NosotrosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
