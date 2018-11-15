import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaygroundPage } from './playground.page';
import { BannerComponent } from './banner/banner.component';
import { InterstitialComponent } from './interstitial/interstitial.component';
import { RewardVideoComponent } from './reward-video/reward-video.component';

const routes: Routes = [
  {
    path: '',
    component: PlaygroundPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaygroundPage, BannerComponent, InterstitialComponent, RewardVideoComponent]
})
export class PlaygroundPageModule {}
