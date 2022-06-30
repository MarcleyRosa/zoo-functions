const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const anim = species.filter((nam) => nam.name === animal);

  return anim.every((el) => el.residents.every((e) => e.age >= age));
}

getAnimalsOlderThan();

module.exports = getAnimalsOlderThan;
