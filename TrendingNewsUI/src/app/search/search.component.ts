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
  test = [];
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
  onClick(eventElement) {
    console.log(eventElement);
    const dialogRef = this.dialog.open(EventViewComponent, {
      width: "70%",
      height: "60%",
      data: {
        eventData: eventElement,
      },
    });
  }
  getCityList() {
    this.citySerivce.fetchCityList().subscribe(
      (response) => {
        console.log(response);
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
            this.searchResultEvent = [];
            for (let i = 0; i < response.length; i++) {
              this.searchResultEvent.push(this.getEventObject(response[i]));
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
        data.content,
        data.date,
        data.city,
        data.county,
        data.state,
        data.numberOfComments,
        data.score,
        data.category,
        data.locationURI
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
