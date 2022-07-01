const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const m18 = entrants.filter((e) => Object.values(e)[1] >= 18 && Object.values(e)[1] < 50).length;
  const menor18 = entrants.filter((e) => Object.values(e)[1] < 18).length;
  const maior50 = entrants.filter((e) => Object.values(e)[1] >= 50).length;

  return { child: menor18, adult: m18, senior: maior50 };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const v18 = entrants.filter((e) => Object.values(e)[1] >= 18 && Object.values(e)[1] < 50).length;
  const vm18 = entrants.filter((e) => Object.values(e)[1] < 18).length;
  const v50 = entrants.filter((e) => Object.values(e)[1] >= 50).length;

  const value = data.prices;

  return (v18 * value.adult) + (v50 * value.senior) + (vm18 * value.child);
}

calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]);

module.exports = { calculateEntry, countEntrants };
