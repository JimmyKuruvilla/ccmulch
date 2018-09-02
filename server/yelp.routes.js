const https = require('https');
const express = require('express');
const router = express.Router();

const YELP_API_KEY = process.env.YELP_API_KEY;

function getYelpReviews(businessName) {
  return new Promise((resolve, reject) => {
    const options = {
      host: 'api.yelp.com',
      port: 443,
      path: `/v3/businesses/${businessName}/reviews`,
      headers: {
        'Authorization': `Bearer ${YELP_API_KEY}`
      }
    };

    const req = https.get(options, (res) => {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));

      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        if (res.statusCode < 200 || res.statusCode > 299) {
          reject({ statusCode: res.statusCode, error: JSON.parse(rawData) })
        } else {
          resolve({ statusCode: res.statusCode, data: JSON.parse(rawData) });
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });
  })
}

router.get('/service/yelp/reviews/:businessName', (req, res) => {
  getYelpReviews(req.params.businessName)
    .then((m) => res.json(m.data))
    .catch((m) => res.status(m.statusCode).send(m.error)
    );
});

module.exports = router;