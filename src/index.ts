import '../node_modules/materialize-css/dist/js/materialize.min.js';
import '../node_modules/materialize-css/sass/materialize.scss';
import '../styles/main.scss';
import '../node_modules/es6-shim/es6-shim.js';
import { YelpService } from './services/yelp.service';
const yelp = new YelpService();
const M = window['M'];
const businessName = 'c-and-c-mulch-and-more-geneva';
const domain = `www.ccmulch.com`;

document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.carousel');
  const instances = M.Carousel.init(elems);
});

function init() {
  yelp
    .getYelpReviews(domain, businessName)
    .then(reviewResp => {
      // image_url
      // time_created: date of review
      // url to link to
      reviewResp.reviews.forEach(review => {
        document
          .getElementById('review-heading')
          .insertAdjacentHTML('afterend', yelp.reviewTemplateFn(review));
      });
    })
    // use snack bar for this
    .catch(err => console.log(err));
}

init();
