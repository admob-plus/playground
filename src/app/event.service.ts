import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Events } from '@admob-plus/core';

export class Event {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: Event[] = [];

  constructor() {
    [
      Events.ready,
      Events.banner_load,
      Events.banner_load_fail,
      Events.banner_exit_app,
      Events.banner_close,
      Events.interstitial_close,
      Events.interstitial_exit_app,
      Events.interstitial_load,
      Events.interstitial_load_fail,
      Events.interstitial_open,
      Events.reward_video_close,
      Events.reward_video_complete,
      Events.reward_video_exit_app,
      Events.reward_video_load,
      Events.reward_video_load_fail,
      Events.reward_video_open,
      Events.reward_video_reward,
      Events.reward_video_start,
    ].forEach(name => {
      document.addEventListener(name, () => {
        this.events.push({ name });
      });
    });
  }

  getEvents(): Observable<Event[]> {
    return of(this.events);
  }
}
