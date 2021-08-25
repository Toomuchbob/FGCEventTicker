import { Component, OnInit } from '@angular/core';

import { SmashGGEvent } from '../SmashGGEvent';
import { EventService } from '../event.service';
import { NavigationService } from '../navigation.service';

import { DateTime } from 'luxon';

import { Game } from '../Game';

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.css']
})

export class EventContainerComponent implements OnInit {

  smashGGEvents: SmashGGEvent[] = [];
  dates: string[] = [];

  constructor(private eventService: EventService, private navigation: NavigationService) { }

  ngOnInit() {
    this.eventService.getEvents(33945)
      .subscribe(data => this.smashGGEvents = data);

    this.navigation.currentGame
      .subscribe(game => this.updateGame(game));
  }

  private updateGame(game: Game) {
    this.eventService.getEvents(game.id)
      .subscribe(data => {
        this.smashGGEvents = data;
        this.getUniqueDates();
      });
  }

  private getUniqueDates() {
    let dates = this.smashGGEvents.map((e) => {
      return DateTime.fromMillis(e.startTime).toISODate();
    });
    this.dates = dates.filter((e, i, a) => {
      return a.indexOf(e) === i;
    });
  }

}