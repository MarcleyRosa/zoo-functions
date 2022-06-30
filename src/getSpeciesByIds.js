const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter((el) => ids.find((e) => e === el.id));
  // return species.filter((el) => console.log(el.id) === console.log(ids.find((e) => e === el.id)));
}
// getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae');

getSpeciesByIds();

module.exports = getSpeciesByIds;
