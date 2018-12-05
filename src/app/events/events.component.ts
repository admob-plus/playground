import { Component, OnInit, Input } from '@angular/core';

import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @Input() filter: string;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
  }

  get events() {
    return this.filter ? this.eventService.events.filter(({name}) => name.indexOf(this.filter) > -1) : this.eventService.events;
  }
}
