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

        <div class="review-details">
          <a href="${review.url}" target="_blank">

            <div class="review-author-details">
              <div class="stars">
                ${stars(review.rating)}
              </div>
              
              <img src="${review.user.image_url}">

              <div class="name">
                <div> ${review.user.name}</div>
                <div>${new Date(review.time_created).toLocaleDateString()}</div>
              </div>
            </div>

            <div class="review-blurb">
              ${review.text}
            </div>

          </a>
        </div>

      </div>`;
    return reviewTemplate;
  }
}

//broke hte image display
