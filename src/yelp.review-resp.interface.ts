import { Review } from "./yelp.reviews.interface";

export interface ReviewsResp {
  reviews: Review[];
  total: number;
  possible_languages: string[];
}