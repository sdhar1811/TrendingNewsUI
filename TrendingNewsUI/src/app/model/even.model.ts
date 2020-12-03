export class EventModel {
  title: string;
  content: string;
  date: string;
  city: string;
  county: string;
  state: string;
  numberOfComments: number;
  score: number;
  constructor(
    title: string,
    content: string,
    date: string,
    city: string,
    county: string,
    state: string,
    numberOfComments: number,
    score: number
  ) {
    this.title = title;
    this.state = state;
    this.date = date;
    this.city = city;
    this.content = content;
    this.county = county;
    this.numberOfComments = numberOfComments;
    this.score = score;
  }
}
