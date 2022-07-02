const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const allIds = employees.filter((e) => e.id === id).map((e) => e.responsibleFor)[0][0];
  const listAnimais = species.filter((e) => e.id === allIds)[0].residents;
  const oldAge = listAnimais.map((e) => e.age);
  const animalOld = listAnimais.find((e) => e.age === Math.max(...oldAge));
  return Object.values(animalOld);
}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
