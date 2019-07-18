const sortByResponsesDescending = (a, b) => {
  if (a.Responses < b.Responses) {
    return 1;
  }

  if (a.Responses > b.Responses) {
    return -1;
  }

  return 0;
};

const sortByNameAscending = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }

  if (a.name < b.name) {
    return -1;
  }

  return 0;
};

module.exports = {
  sortByResponsesDescending,
  sortByNameAscending
};