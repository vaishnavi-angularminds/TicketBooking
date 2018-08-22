import { TestBed, inject } from '@angular/core/testing';

import { DbConnectServiceService } from './db-connect-service.service';

describe('DbConnectServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbConnectServiceService]
    });
  });

  it('should be created', inject([DbConnectServiceService], (service: DbConnectServiceService) => {
    expect(service).toBeTruthy();
  }));
});
