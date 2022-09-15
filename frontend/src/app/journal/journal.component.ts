import { Component, OnInit } from '@angular/core';
import { Log } from './interfaces';
import { MoodJournalService } from './mood-journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  log!: Log[]

  constructor(private journalService: MoodJournalService) { }

  ngOnInit(): void {
    this.getLog();
  }

  getLog() {
    this.journalService.getMoodLog().subscribe(
      (log) => {
        this.log = log
      });
  }

}
