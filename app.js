const request = require('request');
const BASE_URL = 'http://api.brewerydb.com/v2';
const API_KEY = '1e172b58c80d7280c6d04dfbbaebd6b6';
const SEARCH_URL = `${BASE_URL}/search?type=beer&key=${API_KEY}&q=`;

const query = process.argv[2];

function displayBeer(beer) {
  console.log(beer.nameDisplay);
  console.log(beer.description);
}

function handleSearchResponse(err, response, body) {
  if (err || response.statusCode != 200) {
    console.log('Something is wrong with your query');
    return;
  }
  const beers = JSON.parse(body).data;
  for (beer of beers) {
    displayBeer(beer);
  }
}

request(SEARCH_URL + query, handleSearchResponse);

console.log('The End');