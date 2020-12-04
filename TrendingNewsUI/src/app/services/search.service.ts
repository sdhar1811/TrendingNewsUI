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
  getSearchResult(
    keyword: string,
    date: string,
    city: string,
    category: string,
    type: string
  ) {
    let headers = new HttpHeaders();
    let parameters = {
      keyword: keyword,
      date: date,
      city: city,
      category: category,
      type: type,
    };

    console.log(parameters);
    return this.http.get<any>(environment.apiUrl + "search/event/", {
      headers: headers,
      params: parameters,
    });
  }
  addIfPresent(params: HttpParams, key: string, value: string) {
    // if (value && value !== null) {
    params.set(key, value);
    // }
  }
}
