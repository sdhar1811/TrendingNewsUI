import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { LocationViewComponent } from "../location-view/location-view.component";

@Component({
  selector: "app-event-view",
  templateUrl: "./event-view.component.html",
  styleUrls: ["./event-view.component.scss"],
})
export class EventViewComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public eventData: any,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log(this.eventData);
  }

  locationClicked() {
    const dialogRef = this.dialog.open(LocationViewComponent, {
      height: "400px",
      width: "400px",
      data: {
        eventData: this.eventData,
      },
    });
  }
}
