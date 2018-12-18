import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventsModule } from '../../event-log/events/events.module';
import { AdRequestOptionsModule } from '../ad-request-options/ad-request-options.module';

import { TabInterstitialPage } from './tab-interstitial.page';

const routes: Routes = [
  {
    path: '',
    component: TabInterstitialPage
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
  declarations: [TabInterstitialPage]
})
export class TabInterstitialPageModule {}
