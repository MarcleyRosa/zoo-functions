const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('elephant quantity', () => {
    const animal1 = handlerElephants('count');
    expect(animal1).toEqual(4);
  });
  const nam = handlerElephants('names');
  const exp = [
    'Ilana',
    'Orval',
    'Bea',
    'Jefferson',
  ];
  it('elephant names', () => {
    expect(nam).toEqual(exp);
  });
  it('elephant average', () => {
    const averageAg = handlerElephants('averageAge');
    expect(averageAg).toEqual(10.5);
  });
  it('elephant location', () => {
    const location = handlerElephants('location');
    expect(location).toEqual('NW');
  });
  it('popularity elephant', () => {
    const popularityEl = handlerElephants('popularity');
    expect(popularityEl).toEqual(5);
  });
  it('availability day elephant', () => {
    const availabilityEl = handlerElephants('availability');
    expect(availabilityEl).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('param string invalid', () => {
    const invalid = handlerElephants(3);
    expect(invalid).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('return null', () => {
    const paramNull = handlerElephants('');
    expect(paramNull).toEqual(null);
  });
  it('return undefined', () => {
    const undef = handlerElephants(undefined);
    expect(undef).toBeUndefined();
  });
});
