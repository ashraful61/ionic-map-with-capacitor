import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';

@Injectable({
  providedIn: 'root',
})
export class GlobalServiceService {
  latLng: any;

  constructor(private locationAccuracy: LocationAccuracy) {}

  //Location permission window
  // async enableLocation() {
  //   try {
  //     const canRequest: boolean = await this.locationAccuracy.canRequest();
  //     console.log('canRequest: ', canRequest);
  //     if (canRequest) {
  //       await this.locationAccuracy.request(
  //         this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY
  //       );
  //       console.log('Request successful');
  //       return true;
  //     }
  //     return false;
  //   } catch (e) {
  //     console.log(e);
  //     throw e;
  //   }
  // }

  // Get user current lat lng
  getCurrentLocation() {
    return Geolocation.getCurrentPosition()
      .then((coordinates) => {
        return coordinates;
      })
      .catch((e) => {
        throw e;
      });
  }

  //Access or denied permission status for location
  requestLocationPermission() {
    return Geolocation.requestPermissions()
      .then((status) => {
        return status;
      })
      .catch((e) => {
        throw e;
      });
  }
}
