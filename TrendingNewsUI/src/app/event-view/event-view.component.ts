import { FooterRowOutlet } from "@angular/cdk/table";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { LocationViewComponent } from "../location-view/location-view.component";
import { LocationDataService } from "../services/location-data.service";

@Component({
  selector: "app-event-view",
  templateUrl: "./event-view.component.html",
  styleUrls: ["./event-view.component.scss"],
})
export class EventViewComponent implements OnInit {
  displayedColumns: string[] = ["label", "value"];
  dataSource: any = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public locationService: LocationDataService
  ) {
    this.setTableContent();
  }

  setTableContent() {
    let temp = [
      {
        label: "Content",
        value: this.data.content,
      },
      {
        label: "Content",
        value: this.data.content,
      },
      {
        label: "Content",
        value: this.data.content,
      },
      {
        label: "Content",
        value: this.data.content,
      },
      {
        label: "Content",
        value: this.data.content,
      },
      {
        label: "Content",
        value: this.data.content,
      },
    ];
  }

  ngOnInit(): void {}

  locationClicked() {
    this.locationService
      .getLocationDetails(
        this.data.eventData.locationURI,
        this.data.eventData.date
      )
      .subscribe(
        (response) => {
          if (response) {
            const temp = {
              city: this.data.eventData.city,
              state: response.stateName,
              county: response.countyName,
              covidConfirmedCases: response.covidConfirmedCases,
              covidDeaths: response.covidDeaths,
              actualMinTemperature: response.actualMinTemp,
              actualMaxTemperature: response.actualMaxTemp,
              actualMeanTemperature: response.actualMeanTemp,
              actualPercipitation: response.actualPercipitation,
              averageMaxTemp: response.averageMaxTemp,
              averageMinTemp: response.averageMinTemp,
              averagePrecipitation: response.averagePrecipitation,
              date: response.date,
              recordMaxTemp: response.recordMaxTemp,
              recordMaxTempYear: response.recordMaxTempYear,
              recordMinTemp: response.recordMinTemp,
              recordMinTempYear: response.recordMinTempYear,
              recordPrecipitation: response.recordPrecipitation,
            };
            const dialogRef = this.dialog.open(LocationViewComponent, {
              height: "400px",
              width: "400px",
              data: {
                locationDetails: temp,
              },
            });
          }
        },
        (error) => {
          this.handleError(error);
        }
      );
  }

  handleError(error) {
    console.log(error);
  }
}
