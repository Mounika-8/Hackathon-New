import { TestBed } from '@angular/core/testing';

import { ElementsdataService } from './elementsdata.service';

describe('ElementsdataService', () => {
  let service: ElementsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
