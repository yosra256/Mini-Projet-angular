import { TestBed } from '@angular/core/testing';

import { AuthentificationserviceService } from './authentificationservice.service';

describe('AuthentificationserviceService', () => {
  let service: AuthentificationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
