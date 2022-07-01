const data = require('../data/zoo_data');

const { species } = data;

const objVaz = (acc, curr) => {
  if (!acc[curr.name]) {
    acc[curr.name] = curr.residents.length;
  }
  return acc;
};

function countAnimals(animal) {
  if (!animal) {
    return species.reduce(objVaz, {});
  }
  if (animal.sex) {
    return species.filter((e) => e.name === Object.values(animal)[0])
      .map((e) => e.residents.filter((elem) => elem.sex === Object.values(animal)[1]))[0].length;
  }
  if (animal) {
    return species.filter((e) => e.name === Object.values(animal)[0])
      .map((e) => e.residents.length)[0];
  }
}

countAnimals();

module.exports = countAnimals;
