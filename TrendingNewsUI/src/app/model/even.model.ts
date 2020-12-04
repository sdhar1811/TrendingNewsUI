export class EventModel {
  content: string;
  date: string;
  city: string;
  county: string;
  state: string;
  numberOfComments: number;
  score: number;
  category: string;
  locationURI: string;
  constructor(
    content: string,
    date: string,
    city: string,
    county: string,
    state: string,
    numberOfComments: number,
    score: number,
    category: string,
    locationURI: string
  ) {
    this.state = state;
    this.date = date;
    this.city = city;
    this.content = content;
    this.county = county;
    this.numberOfComments = numberOfComments;
    this.score = score;
    this.category = category;
    this.locationURI = locationURI;
  }
}
