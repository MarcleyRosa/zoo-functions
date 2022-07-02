const data = require('../data/zoo_data');

const { species, hours } = data;

const objetoGeral = { Friday: { exhibition:
species.filter((e) => e.availability.find((el) => el === 'Friday'))
  .map((elem) => elem.name),
officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm` },
Monday: { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' },
Saturday: { exhibition: species.filter((e) => e.availability.find((el) => el === 'Saturday'))
  .map((elem) => elem.name),
officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm` },
Sunday: { exhibition: species.filter((e) => e.availability.find((el) => el === 'Sunday'))
  .map((elem) => elem.name),
officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm` },
Thursday: { exhibition: species.filter((e) => e.availability.find((el) => el === 'Thursday'))
  .map((elem) => elem.name),
officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm` },
Tuesday: { exhibition: species.filter((e) => e.availability.find((el) => el === 'Tuesday'))
  .map((elem) => elem.name),
officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm` },
Wednesday: { exhibition: species.filter((e) => e.availability.find((el) => el === 'Wednesday'))
  .map((elem) => elem.name),
officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm` } };

function othersOptions(scheduleTarget, varAnimal) {
  if (scheduleTarget === 'Monday') {
    return { Monday: { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' } };
  }
  if ((varAnimal !== scheduleTarget) || scheduleTarget === undefined) {
    return objetoGeral;
  }
  if (scheduleTarget === varAnimal) {
    const animaisDisponiveis = species.filter((e) => e.name === scheduleTarget)
      .map((el) => el.availability)[0];
    return animaisDisponiveis;
  }
}

function getSchedule(scheduleTarget) {
  const varAnimal = species.map((el) => el.name).find((elem) => elem === scheduleTarget);
  const varDay = species.map(() => Object.keys(hours))[0];

  if (varDay.includes(scheduleTarget) && scheduleTarget !== 'Monday') {
    const ani = species.filter((e) => e.availability
      .find((el) => el === scheduleTarget))
      .map((elem) => elem.name);
    const openZ = Object.entries(hours).filter((e) => e[0] === scheduleTarget)[0][1];
    const closeZ = Object.entries(hours).filter((e) => e[0] === scheduleTarget)[0][1];
    const objeto = { [scheduleTarget]: { exhibition: ani,
      officeHour: `Open from ${openZ.open}am until ${closeZ.close}pm` } };
    return objeto;
  }

  return othersOptions(scheduleTarget, varAnimal);
}

module.exports = getSchedule;
