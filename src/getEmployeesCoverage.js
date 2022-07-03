const data = require('../data/zoo_data');

const { employees, species } = data;

const noParam = (element) => {
  const ani = species.filter((e) => element.responsibleFor.includes(e.id))
    .map((e) => e.name);
  const locationA = species.filter((e) => element.responsibleFor.includes(e.id))
    .map((e) => e.location);
  const objeto = {
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: ani,
    locations: locationA,
  };
  return objeto;
};

function filtraId(param) {
  const nameA = Object.values(param)[0];
  const filterId = employees
    .filter((e) => e.firstName === nameA || e.lastName === nameA || e.id === nameA)[0];
  const ani = species.filter((e) => filterId.responsibleFor.includes(e.id))
    .map((e) => e.name);
  const locationA = species.filter((e) => filterId.responsibleFor.includes(e.id))
    .map((e) => e.location);
  const objeto = {
    id: filterId.id,
    fullName: `${filterId.firstName} ${filterId.lastName}`,
    species: ani,
    locations: locationA,
  };
  return objeto;
}
function paramNameId(param, imp) {
  if (imp === 'name' || imp === 'id') {
    return filtraId(param);
  }
}

function getEmployeesCoverage(param) {
  if (param === undefined) {
    return employees.map((element) => noParam(element));
  }
  const imp = Object.keys(param)[0];
  const valueObj = Object.values(param)[0];
  const findName = employees
    .some((e) => e.firstName === valueObj || e.lastName === valueObj || e.id === valueObj);
  if (findName === false) {
    throw new Error('Informações inválidas');
  }
  try {
    return paramNameId(param, imp);
  } catch (error) {
    return error.message;
  }
}

module.exports = getEmployeesCoverage;
