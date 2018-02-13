//import {restar} from "./../experimentos"


const sumar = require('./../add');
describe('sumar', () => {
  it('should add two numbers', () => {
    expect(sumar(1, 2)).toBe(3);
  });
});
