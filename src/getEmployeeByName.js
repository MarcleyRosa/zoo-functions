const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const test = employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
  return test;
}

getEmployeeByName();

module.exports = getEmployeeByName;
