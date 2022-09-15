import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { Log } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoodJournalService {

  constructor(private http: HttpClient) { }

  getMoodLog(): Observable<Log[]> {
    return this.http.get<Log[]>('http://127.0.0.1:8000/moodJournal/logs/').pipe(
      tap((_) => {
        console.log("test")
      })
    )
  }
}
