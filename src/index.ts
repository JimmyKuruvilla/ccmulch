import '../node_modules/materialize-css/dist/js/materialize.min.js';
import '../node_modules/materialize-css/sass/materialize.scss';
import '../styles/main.scss';
import '../node_modules/es6-shim/es6-shim.js';
import { ReviewsResp } from './yelp.review-resp.interface.js';
import { HttpService } from './services/http.service';
const M = window['M'];
const businessName = 'c-and-c-mulch-and-more-geneva';
const http = new HttpService();

document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.carousel');
  const instances = M.Carousel.init(elems);
});

function getYelpReviews(): Promise<ReviewsResp> {
  const url = `https://www.ccmulch.com/service/yelp/reviews/${businessName}`;
  return http.get(url);
}

function init() {
  // use snack bar for this
  getYelpReviews()
    .then(reviewResp => {
      const reviews = reviewResp.reviews;
      // rating => stars
      // text => text
      // time_created: date of review
      // url to link to
      //user-
      // image_url
      // name
    })
    .catch(err => console.log(err));
}

init();
