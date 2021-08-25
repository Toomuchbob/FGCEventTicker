import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';

import { DateTime } from 'luxon';

import { SmashGGEvent } from '../SmashGGEvent';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() smashGGEvent?: SmashGGEvent;

  timeUntilEvent: number | string = "timeUntilEvent";

  constructor() { }

  ngOnInit(): void {
    this.timeUntilEvent = DateTime.fromMillis(this.smashGGEvent!.startTime).diffNow(['weeks', 'days', 'hours', 'minutes']).toFormat("d'd' h'h' m'm'");
  }
}
