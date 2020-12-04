import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class NewsCategoryService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  fetchNewsCategoryList() {
    return this.http.get<any>(environment.apiUrl + "/getEventCategory");
  }
}
