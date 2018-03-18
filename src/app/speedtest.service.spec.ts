import { TestBed, inject } from '@angular/core/testing';

import { SpeedtestService } from './speedtest.service';

describe('SpeedtestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeedtestService]
    });
  });

  it('should be created', inject([SpeedtestService], (service: SpeedtestService) => {
    expect(service).toBeTruthy();
  }));
});
