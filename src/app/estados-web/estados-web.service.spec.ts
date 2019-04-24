import { TestBed } from '@angular/core/testing';

import { EstadosWebService } from './estados-web.service';

describe('EstadosWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstadosWebService = TestBed.get(EstadosWebService);
    expect(service).toBeTruthy();
  });
});
