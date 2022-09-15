import { TestBed } from '@angular/core/testing';

import { MoodJournalService } from './mood-journal.service';

describe('MoodJournalService', () => {
  let service: MoodJournalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoodJournalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
