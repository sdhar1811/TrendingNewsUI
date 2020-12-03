import { HttpClient, HttpParams } from "@angular/common/http";
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
    let params = new HttpParams();
    params.set("keyword", keyword);
    this.addIfPresent(params, "date", date);
    this.addIfPresent(params, "city", city);
    this.addIfPresent(params, "category", category);
    this.addIfPresent(params, "type", type);

    return this.http.get<any>(environment.apiUrl + "/search/event", {
      params: params,
    });
  }
  addIfPresent(params: HttpParams, key: string, value: string) {
    if (value && value !== null) {
      params.set(key, value);
    }
  }
}
