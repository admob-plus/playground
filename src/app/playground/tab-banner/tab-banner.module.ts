import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventsModule } from '../../event-log/events/events.module';
import { AdRequestOptionsModule } from '../ad-request-options/ad-request-options.module';

import { TabBannerPage } from './tab-banner.page';

const routes: Routes = [
  {
    path: '',
    component: TabBannerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsModule,
    AdRequestOptionsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabBannerPage]
})
export class TabBannerPageModule {}
