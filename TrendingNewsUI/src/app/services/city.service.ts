import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CityService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  fetchCityList() {
    return this.http.get<any>(environment.apiUrl + "/getAllCities");
  }
}
