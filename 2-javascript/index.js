const data = [
  {
    name: "Chicago",
    Responses: 34
  },
  {
    name: "Toronto",
    Responses: 45
  },
  {
    name: "New York",
    Responses: 66
  },
  {
    name: "Vancouver",
    Responses: 12
  },
  {
    name: "Dallas",
    Responses: 5
  },
  {
    name: "Ottawa",
    Responses: 31
  },
  {
    name: "Boston",
    Responses: 3
  },
  {
    name: "San Francisco",
    Responses: 0
  },
  {
    name: "Montreal",
    Responses: 31
  },
  {
    name: "Calgary",
    Responses: 18
  },
  {
    name: "Houston",
    Responses: 22
  },
  {
    name: "Las Vegas",
    Responses: 16
  }
];

getTopTen = data => {
  return data
    .sort(sortByNameAscending)
    .sort(sortByResponsesDescending);
};

sortByResponsesDescending = (a, b) => {
  if (a.Responses < b.Responses) {
    return 1;
  }

  if (a.Responses > b.Responses) {
    return -1;
  }

  return 0;
};

sortByNameAscending = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }

  if (a.name < b.name) {
    return -1;
  }

  return 0;
};

console.log(getTopTen(data));