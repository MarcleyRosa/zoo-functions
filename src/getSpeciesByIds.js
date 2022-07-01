const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter((el) => ids.find((e) => e === el.id));
}
getSpeciesByIds();

module.exports = getSpeciesByIds;
