import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { SmashGGEvent } from './SmashGGEvent';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsUrl = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }
  
  getEvents(gameId: number): Observable<SmashGGEvent[]> {
    return this.http.get<SmashGGEvent[]>(`${this.eventsUrl}?videogameId=${gameId}`);
  }

}
