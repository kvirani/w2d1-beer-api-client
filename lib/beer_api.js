// Response for handling API request
const request = require('request');
const BASE_URL = 'http://api.brewerydb.com/v2';
const API_KEY = '1e172b58c80d7280c6d04dfbbaebd6b6';
const SEARCH_URL = `${BASE_URL}/search?type=beer&key=${API_KEY}&q=`;

function searchBeer(query, callback) {
  request(SEARCH_URL + query, (err, resp, body) => {
    // async stuff here
    if (err || resp.statusCode != 200) {
      // things didn't go well, let the caller know!
      callback(err || "Status code was not 200");
      return;
    }
    // parse the data and send it back
    const beers = JSON.parse(body).data;
    // since searchBeer has already returned, we need to return this beer data via a callback!
    callback(err, beers);
    // return beers; <= Can't do this. See note in README for explanation.
  });
}

module.exports = {
  searchBeer: searchBeer,
}
