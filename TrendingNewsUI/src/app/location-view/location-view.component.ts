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
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.data = this.data.locationDetails;
  }
}
