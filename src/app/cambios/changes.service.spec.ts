import { TestBed } from '@angular/core/testing';

import { ChangesService } from './changes.service';

describe('CambiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangesService = TestBed.get(ChangesService);
    expect(service).toBeTruthy();
  });
});
