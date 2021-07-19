import { TestBed } from '@angular/core/testing';

import { ShapeCRUDService } from './shape-crud.service';

describe('ShapeCRUDService', () => {
  let service: ShapeCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShapeCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
