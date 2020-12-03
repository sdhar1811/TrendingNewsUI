import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LocationDataService {
  constructor(public http: HttpClient) {}

  getLocationDetails(location: string, date: string) {
    let params = new HttpParams();
    params.set("location", location);
    params.set("date", date);
    return this.http.get<any>(environment.apiUrl + "/location", {
      params: params,
    });
  }
}
