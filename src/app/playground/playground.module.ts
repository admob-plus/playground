import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaygroundPage } from './playground.page';

const routes: Routes = [
  {
    path: '',
    component: PlaygroundPage,
    children: [
      {
        path: 'banner',
        children: [{ path: '', loadChildren: './tab-banner/tab-banner.module#TabBannerPageModule' }]
      },
      {
        path: 'interstitial',
        children: [{ path: '', loadChildren: './tab-interstitial/tab-interstitial.module#TabInterstitialPageModule' }]
      },
      {
        path: 'reward-video',
        children: [{ path: '', loadChildren: './tab-reward-video/tab-reward-video.module#TabRewardVideoPageModule' }]
      },
      {
        path: '', redirectTo: '/playground/banner', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaygroundPage]
})
export class PlaygroundPageModule {}
