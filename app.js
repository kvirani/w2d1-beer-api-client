const beerAPI = require('./lib/beer_api');
const query = process.argv[2];

function displayBeer(beer) {
  console.log(beer.nameDisplay);
  console.log(beer.description);
}

beerAPI.searchBeer(query, (err, beers) => {
  if (err) {
    throw err;
  }
  for (beer of beers) {
    displayBeer(beer);
  }
});

console.log('The End? (Nope!)');