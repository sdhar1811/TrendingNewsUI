import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { LocationDataService } from "../services/location-data.service";

@Component({
  selector: "app-location-view",
  templateUrl: "./location-view.component.html",
  styleUrls: ["./location-view.component.scss"],
})
export class LocationViewComponent implements OnInit {
  locationDetails: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public locationService: LocationDataService
  ) {}

  ngOnInit(): void {
    this.fetchLocationData();
  }
  fetchLocationData() {
    this.locationService
      .getLocationDetails(this.data.location, this.data.date)
      .subscribe(
        (response) => {
          if (response) {
            this.locationDetails.city = response.city;
            this.locationDetails.state = response.state;
            this.locationDetails.county = response.county;
            this.locationDetails.covidConfirmedCases =
              response.covidConfirmedCases;
            this.locationDetails.covidDeaths = response.covidDeaths;
            this.locationDetails.minTemperature = response.minTemperature;
            this.locationDetails.maxTemperature = response.maxTemperature;
          }
        },
        (error) => this.handleError(error)
      );
  }
  handleError(error) {
    console.log(error);
  }
}
