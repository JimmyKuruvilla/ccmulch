import '../node_modules/materialize-css/dist/js/materialize.min.js';
import "../node_modules/materialize-css/sass/materialize.scss";
import "../styles/main.scss";
const M = window['M'];

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});