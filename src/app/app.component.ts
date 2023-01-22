import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { GlobalServiceService } from './global-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public globalSrv: GlobalServiceService
  ) {

  }

  handleUserLocationPermission = () => {
    if (!localStorage.getItem("latLng")) {
      Swal.fire({
        backdrop: false,
        text: "Please share your location to get your location-appropriate daily horoscope.",
        confirmButtonColor: "#2852C3",
        width: "90%",
      }).then((result) => {
        if (result.isConfirmed) {
          this.enableLocation();
        }
      });
    }
  };

  async enableLocation() {
    try {
      const status = await this.globalSrv.requestLocationPermission();
      // if (status?.location === "granted") {
      //   const stat = await this.globalSrv.enableLocation();
        // if (stat) {
          const latLng = await this.globalSrv.getCurrentLocation();
          localStorage.setItem("latLng", JSON.stringify(latLng));
          alert(JSON.stringify(latLng));
          this.globalSrv.latLng = latLng?.coords;
        // }
      // } 
      // else {
      //   this.enableLocation();
      // }
    } catch (e) {
      console.log(e);
    }
  }

}
