const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((e) => e.managers.find((elem) => elem === id) === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try {
    const emp = employees.filter((e) => e.managers.find((el) => el === managerId));
    return emp.map((e) => `${e.firstName} ${e.lastName}`);
  } catch (error) {
    return error.message;
  }
}
getRelatedEmployees();
isManager();

module.exports = { isManager, getRelatedEmployees };
