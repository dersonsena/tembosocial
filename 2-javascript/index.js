const { cities } = require('./cities');
const { sortByNameAscending, sortByResponsesDescending } = require('./sort-functions');

getTopTen = data => {
  return data
    .sort(sortByNameAscending)
    .sort(sortByResponsesDescending);
};

console.log(getTopTen(cities));