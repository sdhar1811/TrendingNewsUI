import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.prod";
import { EventModel } from "../model/even.model";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  getSearchResultWithFilter(
    keyword: string,
    date: string,
    city: string,
    category: string
  ) {
    let parameters = {
      keyword: keyword,
      date: date,
      cityName: city,
      category: category,
    };

    console.log(parameters);
    return this.http.get<any>(environment.apiUrl + "search/event/filter", {
      params: parameters,
    });
  }
  getSearchResult(keyword: string) {
    let parameters = {
      keyword: keyword,
    };

    console.log(parameters);
    return this.http.get<any>(environment.apiUrl + "search/event/", {
      params: parameters,
    });
  }
  addIfPresent(params: HttpParams, key: string, value: string) {
    // if (value && value !== null) {
    params.set(key, value);
    // }
  }
}
