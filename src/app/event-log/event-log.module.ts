import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventsModule } from '../events/events.module';

import { EventLogPage } from './event-log.page';

const routes: Routes = [
  {
    path: '',
    component: EventLogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventLogPage]
})
export class EventLogPageModule {}
