import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AgmMap } from "@agm/core";
import { GlobalServiceService } from "../global-service.service";
@Component({
  selector: "app-follow-horoscope-readers",
  templateUrl: "./follow-horoscope-readers.page.html",
  styleUrls: ["./follow-horoscope-readers.page.scss"],
})
export class FollowHoroscopeReadersPage implements OnInit {
  // google maps zoom level
  zoom: number = 6;

  // initial center position for the map
  lat: number = 23.777176;
  lng: number = 90.399452;
  markers: any = [];
  usersLatLngData: any[] = [];
  ashraf:any = null;

  constructor(
    public horoscopeService: GlobalServiceService,
    public route: ActivatedRoute,
    private httpClient: HttpClient,
  ) {}

  ngOnInit() {
    // this.getQueryParams();
  }
  ionViewDidEnter() {
    this.getJsonMapData();
  }
  getJsonMapData = () => {
    this.markers = [];
    this.httpClient.get("assets/mapData/latLng.json").subscribe((data) => {
      this.markers = data;
      this.getUserLatLng();
    });
  };

  getUserLatLng = () => {
    if (!!localStorage.getItem("latLng")) {
      this.ashraf = localStorage.getItem("latLng")
      const latLng = JSON.parse(this.ashraf);
      this.horoscopeService.latLng = latLng.coords;
      const { latitude, longitude } = latLng?.coords;
      this.lat = latitude;
      this.lng = longitude;
      this.markers.push({
        lat: this.lat,
        lng: this.lng,
        label: "Me",
        draggable: true,
      });
    }
  };



  focusMeOnMap = () => {
    console.log('focus');
    this.lat = 0;
    this.lng = 0;
    setTimeout(() => {
      const { latitude, longitude } = this.horoscopeService.latLng;
      this.lat = latitude;
      this.lng = longitude;
      this.zoom = 16;
    });
  };

}
