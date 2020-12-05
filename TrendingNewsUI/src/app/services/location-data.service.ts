import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LocationDataService {
  constructor(public http: HttpClient) {}

  getLocationDetails(location: string, date: string) {
    location = location.substring(location.lastIndexOf("#") + 1);

    let params = {
      cityId: location,
      date: date,
    };
    return this.http.get<any>(environment.apiUrl + "/search/location", {
      params: params,
    });
  }
}
