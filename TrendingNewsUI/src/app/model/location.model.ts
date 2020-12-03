export class LocationModel {
  date: string;
  city: string;
  county: string;
  state: string;
  covidConfirmedCases: number;
  covidDeaths: number;
  minTemperature: number;
  maxTemperatire: number;

  constructor(
    city: string,
    county: string,
    state: string,
    covidConfirmedCases: number,
    covidDeaths: number,
    minTemperature: number,
    maxTemperature: number,
    date: string
  ) {
    this.state = state;
    this.city = city;
    this.county = county;
    this.date = date;
    this.minTemperature = minTemperature;
    this.maxTemperatire = maxTemperature;
    this.covidConfirmedCases = covidConfirmedCases;
    this.covidDeaths = covidDeaths;
  }
}
