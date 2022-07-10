const data = require('../data/zoo_data');

const { species } = data;

const namesLoc = (reg, loc) => species.filter((e) => e.location === reg).map((el) => el[loc]);

const speciesLoc = (reg, loc, pos, tSex) => species.filter((e) => e.location === reg)
  .map((el) => el[loc])[pos].filter((e) => e.sex === tSex).map((elem) => elem.name);

const speName = (reg, pos) => species.filter((e) => e.location === reg)
  .map((el) => el.residents)[pos].map((el) => el.name);

const locationAnimal = () => {
  const objetoLocation = {
    NE: namesLoc('NE', 'name'),
    NW: namesLoc('NW', 'name'),
    SE: namesLoc('SE', 'name'),
    SW: namesLoc('SW', 'name'),
  };
  return objetoLocation;
};
const getSort = () => (a, b) => a.localeCompare(b);
const noSort = () => (a, b) => a - b;

const sortAnimal = (func) => {
  const objetoLocation = {
    NE: [
      { [namesLoc('NE', 'name')[0]]: speName('NE', '0').sort(func) },
      { [namesLoc('NE', 'name')[1]]: speName('NE', '1').sort(func) }],
    NW: [
      { [namesLoc('NW', 'name')[0]]: speName('NW', '0').sort(func) },
      { [namesLoc('NW', 'name')[1]]: speName('NW', '1').sort(func) },
      { [namesLoc('NW', 'name')[2]]: speName('NW', '2').sort(func) }],
    SE: [
      { [namesLoc('SE', 'name')[0]]: speName('SE', '0').sort(func) },
      { [namesLoc('SE', 'name')[1]]: speName('SE', '1').sort(func) }],
    SW: [
      { [namesLoc('SW', 'name')[0]]: speName('SW', '0').sort(func) },
      { [namesLoc('SW', 'name')[1]]: speName('SW', '1').sort(func) }],
  };
  return objetoLocation;
};

const sortSexAnimal = (typeSex, func) => {
  const objetoLocation = {
    NE: [
      { [namesLoc('NE', 'name')[0]]: speciesLoc('NE', 'residents', '0', typeSex).sort(func) },
      { [namesLoc('NE', 'name')[1]]: speciesLoc('NE', 'residents', '1', typeSex).sort(func) }],
    NW: [
      { [namesLoc('NW', 'name')[0]]: speciesLoc('NW', 'residents', '0', typeSex).sort(func) },
      { [namesLoc('NW', 'name')[1]]: speciesLoc('NW', 'residents', '1', typeSex).sort(func) },
      { [namesLoc('NW', 'name')[2]]: speciesLoc('NW', 'residents', '2', typeSex).sort(func) }],
    SE: [
      { [namesLoc('SE', 'name')[0]]: speciesLoc('SE', 'residents', '0', typeSex).sort(func) },
      { [namesLoc('SE', 'name')[1]]: speciesLoc('SE', 'residents', '1', typeSex).sort(func) }],
    SW: [
      { [namesLoc('SW', 'name')[0]]: speciesLoc('SW', 'residents', '0', typeSex).sort(func) },
      { [namesLoc('SW', 'name')[1]]: speciesLoc('SW', 'residents', '1', typeSex).sort(func) }],
  };
  return objetoLocation;
};

const maleSort = (options, valueObj, keyObj) => {
  if (valueObj.includes('male') && keyObj.includes('sorted')) {
    return sortSexAnimal('male', getSort());
  }
  if (valueObj.includes('male')) {
    return sortSexAnimal('male', noSort());
  }
};
const femaleSort = (options, valueObj, keyObj) => {
  if (valueObj.includes('female') && keyObj.includes('sorted')) {
    return sortSexAnimal('female', getSort());
  }
  if (valueObj.includes('female')) {
    return sortSexAnimal('female', noSort());
  }
};
const comp = (options, valueObj, keyObj) => {
  if (valueObj.includes('female')) {
    return femaleSort(options, valueObj, keyObj);
  }
  if (valueObj.includes('male')) {
    return maleSort(options, valueObj, keyObj);
  }
  if (keyObj.includes('sorted')) {
    return sortAnimal(getSort());
  }
  if (keyObj.includes('includeNames')) {
    return sortAnimal(noSort());
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

module.exports = getAnimalMap;
