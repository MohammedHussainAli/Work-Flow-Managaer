import { TestBed } from '@angular/core/testing';

import { WorkFlowServiceService } from './work-flow-service.service';

describe('WorkFlowServiceService', () => {
  let service: WorkFlowServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkFlowServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
