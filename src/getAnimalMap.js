const data = require('../data/zoo_data');

const { species } = data;

const speciesNE = species.filter((e) => e.location === 'NE').map((el) => el.residents);
const speciesNW = species.filter((e) => e.location === 'NW').map((el) => el.residents);
const speciesSE = species.filter((e) => e.location === 'SE').map((el) => el.residents);
const speciesSW = species.filter((e) => e.location === 'SW').map((el) => el.residents);

const locationAnimal = () => {
  const namesNE = species.filter((e) => e.location === 'NE').map((el) => el.name);
  const namesNW = species.filter((e) => e.location === 'NW').map((el) => el.name);
  const namesSE = species.filter((e) => e.location === 'SE').map((el) => el.name);
  const namesSW = species.filter((e) => e.location === 'SW').map((el) => el.name);
  const objetoLocation = {
    NE: namesNE,
    NW: namesNW,
    SE: namesSE,
    SW: namesSW,
  };
  return objetoLocation;
};
const sortAnimal = () => {
  const objetoLocation = {
    NE: [
      { lions: speciesNE[0].map((el) => el.name).sort() },
      { giraffes: speciesNE[1].map((el) => el.name).sort() }],
    NW: [
      { tigers: speciesNW[0].map((el) => el.name).sort() },
      { bears: speciesNW[1].map((el) => el.name).sort() },
      { elephants: speciesNW[2].map((el) => el.name).sort() }],
    SE: [
      { penguins: speciesSE[0].map((el) => el.name).sort() },
      { otters: speciesSE[1].map((el) => el.name).sort() }],
    SW: [
      { frogs: speciesSW[0].map((el) => el.name).sort() },
      { snakes: speciesSW[1].map((el) => el.name).sort() }],
  };
  return objetoLocation;
};

const Animal = () => {
  const objetoLocation = {
    NE: [
      { lions: speciesNE[0].map((el) => el.name) },
      { giraffes: speciesNE[1].map((el) => el.name) }],
    NW: [
      { tigers: speciesNW[0].map((el) => el.name) },
      { bears: speciesNW[1].map((el) => el.name) },
      { elephants: speciesNW[2].map((el) => el.name) }],
    SE: [
      { penguins: speciesSE[0].map((el) => el.name) },
      { otters: speciesSE[1].map((el) => el.name) }],
    SW: [
      { frogs: speciesSW[0].map((el) => el.name) },
      { snakes: speciesSW[1].map((el) => el.name) }],
  };
  return objetoLocation;
};
const sexMaleAnimal = () => {
  const objetoLocation = {
    NE: [
      { lions: speciesNE[0].filter((e) => e.sex === 'male').map((el) => el.name) },
      { giraffes: speciesNE[1].filter((e) => e.sex === 'male').map((el) => el.name) }],
    NW: [
      { tigers: speciesNW[0].filter((e) => e.sex === 'male').map((el) => el.name) },
      { bears: speciesNW[1].filter((e) => e.sex === 'male').map((el) => el.name) },
      { elephants: speciesNW[2].filter((e) => e.sex === 'male').map((el) => el.name) }],
    SE: [
      { penguins: speciesSE[0].filter((e) => e.sex === 'male').map((el) => el.name) },
      { otters: speciesSE[1].filter((e) => e.sex === 'male').map((el) => el.name) }],
    SW: [
      { frogs: speciesSW[0].filter((e) => e.sex === 'male').map((el) => el.name) },
      { snakes: speciesSW[1].filter((e) => e.sex === 'male').map((el) => el.name) }],
  };
  return objetoLocation;
};
const sexFemaleAnimal = () => {
  const objetoLocation = {
    NE: [
      { lions: speciesNE[0].filter((e) => e.sex === 'female').map((el) => el.name) },
      { giraffes: speciesNE[1].filter((e) => e.sex === 'female').map((el) => el.name) }],
    NW: [
      { tigers: speciesNW[0].filter((e) => e.sex === 'female').map((el) => el.name) },
      { bears: speciesNW[1].filter((e) => e.sex === 'female').map((el) => el.name) },
      { elephants: speciesNW[2].filter((e) => e.sex === 'female').map((el) => el.name) }],
    SE: [
      { penguins: speciesSE[0].filter((e) => e.sex === 'female').map((el) => el.name) },
      { otters: speciesSE[1].filter((e) => e.sex === 'female').map((el) => el.name) }],
    SW: [
      { frogs: speciesSW[0].filter((e) => e.sex === 'female').map((el) => el.name) },
      { snakes: speciesSW[1].filter((e) => e.sex === 'female').map((el) => el.name) }],
  };
  return objetoLocation;
};
const sortSexMaleAnimal = () => {
  const objetoLocation = {
    NE: [
      { lions: speciesNE[0].filter((e) => e.sex === 'male').map((el) => el.name).sort() },
      { giraffes: speciesNE[1].filter((e) => e.sex === 'male').map((el) => el.name).sort() }],
    NW: [
      { tigers: speciesNW[0].filter((e) => e.sex === 'male').map((el) => el.name).sort() },
      { bears: speciesNW[1].filter((e) => e.sex === 'male').map((el) => el.name).sort() },
      { elephants: speciesNW[2].filter((e) => e.sex === 'male').map((el) => el.name).sort() }],
    SE: [
      { penguins: speciesSE[0].filter((e) => e.sex === 'male').map((el) => el.name).sort() },
      { otters: speciesSE[1].filter((e) => e.sex === 'male').map((el) => el.name).sort() }],
    SW: [
      { frogs: speciesSW[0].filter((e) => e.sex === 'male').map((el) => el.name).sort() },
      { snakes: speciesSW[1].filter((e) => e.sex === 'male').map((el) => el.name).sort() }],
  };
  return objetoLocation;
};
const sortSexFemaleAnimal = () => {
  const objetoLocation = {
    NE: [
      { lions: speciesNE[0].filter((e) => e.sex === 'female').map((el) => el.name).sort() },
      { giraffes: speciesNE[1].filter((e) => e.sex === 'female').map((el) => el.name).sort() }],
    NW: [
      { tigers: speciesNW[0].filter((e) => e.sex === 'female').map((el) => el.name).sort() },
      { bears: speciesNW[1].filter((e) => e.sex === 'female').map((el) => el.name).sort() },
      { elephants: speciesNW[2].filter((e) => e.sex === 'female').map((el) => el.name).sort() }],
    SE: [
      { penguins: speciesSE[0].filter((e) => e.sex === 'female').map((el) => el.name).sort() },
      { otters: speciesSE[1].filter((e) => e.sex === 'female').map((el) => el.name).sort() }],
    SW: [
      { frogs: speciesSW[0].filter((e) => e.sex === 'female').map((el) => el.name).sort() },
      { snakes: speciesSW[1].filter((e) => e.sex === 'female').map((el) => el.name).sort() }],
  };
  return objetoLocation;
};
const maleSort = (options) => {
  const valueObj = Object.values(options);
  const keyObj = Object.keys(options);
  if (valueObj.includes('male') && keyObj.includes('sorted')) {
    return sortSexMaleAnimal();
  }
  if (valueObj.includes('male')) {
    return sexMaleAnimal();
  }
};
const femaleSort = (options) => {
  const valueObj = Object.values(options);
  const keyObj = Object.keys(options);
  if (valueObj.includes('female') && keyObj.includes('sorted')) {
    return sortSexFemaleAnimal();
  }
  if (valueObj.includes('female')) {
    return sexFemaleAnimal();
  }
};
const comp = (options, valueObj, keyObj) => {
  if (valueObj.includes('female')) {
    return femaleSort(options);
  }
  if (valueObj.includes('male')) {
    return maleSort(options);
  }
  if (keyObj.includes('sorted')) {
    return sortAnimal();
  }
  if (keyObj.includes('includeNames')) {
    return Animal();
  }
};

function getAnimalMap(options) {
  if (!options) {
    return locationAnimal();
  }
  const valueObj = Object.values(options);
  const keyObj = Object.keys(options);
  if (!keyObj.includes('includeNames')) {
    return locationAnimal();
  }
  return comp(options, valueObj, keyObj);
}

getAnimalMap({ sex: 'female' });

module.exports = getAnimalMap;
