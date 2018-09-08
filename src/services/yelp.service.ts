import { HttpService } from './http.service';
import { Review } from './yelp.reviews.interface';
import { ReviewsResp } from './yelp.review-resp.interface';
const http = new HttpService();

export class YelpService {
  public getYelpReviews(
    domain: string,
    businessName: string
  ): Promise<ReviewsResp> {
    const url = `https://${domain}/service/yelp/reviews/${businessName}`;
    return http.get(url);
  }

  public reviewTemplateFn(review: Review) {
    const stars = (rating: number) => {
      let stars = '';
      for (let i = 0; i < rating; i++) {
        stars += '<i class="material-icons">stars</i>';
      }
      return stars;
    };

    const reviewTemplate = `
        <div class="review">
          <div class="stars">
          ${stars(review.rating)}
          </div>
          <div class="review-details">
            <a href="${review.url}" target="_blank" 
            <img class="review-author-img" src="${review.user.image_url}">
            </a>
            <div class="review-blurb">
              ${review.text}
            </div>
          </div>
          <div class="review-author-details">
              ${review.user.name}, ${new Date(
      review.time_created
    ).toLocaleDateString()}
            </div>
        </div>`;
    return reviewTemplate;
  }
}

//broke hte image display
