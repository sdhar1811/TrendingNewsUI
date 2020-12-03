import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EventModel } from "../model/even.model";
import { EventViewComponent } from "../event-view/event-view.component";
import { CityService } from "../services/city.service";
import { NewsCategoryService } from "../services/news-category.service";
import { SearchService } from "../services/search.service";
import { LocationModel } from "../model/location.model";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  searchResultEvent: any;
  searchResultLocation: any;
  searchError: any;
  test = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  cityList: any;
  newsCategoryList: any;
  searchInput: string = "";
  dateInput: any = "";
  newsCategory: string = "";
  cityInput: string = "";
  searchType: string = "event";

  constructor(
    public dialog: MatDialog,
    public citySerivce: CityService,
    public newsCategoryService: NewsCategoryService,
    public searchService: SearchService
  ) {}

  ngOnInit() {
    this.getCityList();
    this.getNewsCategoryList();
  }
  onClick(test) {
    const dialogRef = this.dialog.open(EventViewComponent, {
      width: "50%",
      height: "40%",
      data: {
        location: "test",
      },
    });
  }
  getCityList() {
    this.citySerivce.fetchCityList().subscribe(
      (response) => {
        this.cityList = response;
      },
      (error) => {
        this.handleError(error);
      }
    );
  }
  getNewsCategoryList() {
    this.newsCategoryService.fetchNewsCategoryList().subscribe(
      (response) => {
        this.newsCategoryList = response;
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  searchSubmit() {
    this.searchService
      .getSearchResult(
        this.searchInput,
        this.dateInput,
        this.cityInput,
        this.newsCategory,
        this.searchType
      )
      .subscribe(
        (response) => {
          if (response) {
            if (response.type === "event") {
              this.searchResultEvent = [];
              for (let i = 0; i < response.result.length; i++) {
                this.searchResultEvent.push(
                  this.getEventObject(response.result[i])
                );
              }
            } else {
              for (let i = 0; i < response.result.length; i++) {
                this.searchResultLocation.push(
                  this.getLocationObject(response.result[i])
                );
              }
            }
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
  getEventObject(data: any) {
    if (data) {
      return new EventModel(
        data.title,
        data.content,
        data.date,
        data.city,
        data.county,
        data.state,
        data.numberOfComments,
        data.score
      );
    }
  }
  getLocationObject(data: any) {
    if (data) {
      return new LocationModel(
        data.state,
        data.city,
        data.county,
        data.date,
        data.minTemperature,
        data.maxTemperature,
        data.covidConfirmedCases,
        data.covidDeaths
      );
    }
  }
}
