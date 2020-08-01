import { TestBed } from '@angular/core/testing';

import { NgxApiAdminService } from './ngx-api-admin.service';

describe('NgxApiAdminService', () => {
  let service: NgxApiAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxApiAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
