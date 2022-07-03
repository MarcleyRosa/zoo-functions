const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('no argument', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Argument Monday', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Argument Tuesday and 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Argument Wednesday and 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Error The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => getOpeningHours('Wednesday', '09:00-')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Error should represent a number', () => {
    expect(() => getOpeningHours('Monday', '09:AA-PM')).toThrow('The minutes should represent a number');
  });
  it('The hour must be between 0 and 12', () => {
    expect(() => getOpeningHours('Tuesday', '15:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('The minutes must be between 0 and 59', () => {
    expect(() => getOpeningHours('Tuesday', '09:73-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('09:00-AM', 'Tuesday')).toThrow('The day must be valid. Example: Monday');
  });
});
