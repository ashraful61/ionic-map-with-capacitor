import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowHoroscopeReadersPage } from './follow-horoscope-readers.page';

const routes: Routes = [
  {
    path: '',
    component: FollowHoroscopeReadersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowHoroscopeReadersPageRoutingModule {}
