import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowHoroscopeReadersPageRoutingModule } from './follow-horoscope-readers-routing.module';

import { FollowHoroscopeReadersPage } from './follow-horoscope-readers.page';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowHoroscopeReadersPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB1L9PaICXQEQxz63Z6e2ECmWuHGpZCRmA',
      libraries: ['drawing', 'places'],
      language: 'en',
    }),
    AgmJsMarkerClustererModule
  ],
  declarations: [FollowHoroscopeReadersPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FollowHoroscopeReadersPageModule {}
