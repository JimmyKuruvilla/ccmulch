const express = require('express');
const helmet = require('helmet');
const yelpRoutes = require('./yelp.routes');
const app = express();

app.set('trust proxy', 'loopback')
app.use(helmet());
app.use(yelpRoutes);
app.listen(3000, () => console.log('Freelance Express on port 3000'))

