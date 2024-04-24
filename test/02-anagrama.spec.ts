import fun from '../src/02-anagrama';
import {expect} from 'chai';

describe('02 anagrama', () => {
  it('Test case 1', () => {
    expect(fun('igual', 'igual')).to.be.false;
  });

  it('Test case 2', () => {
    expect(fun('lobo', 'bolo')).to.be.true;
  });

  it('Test case 3', () => {
    expect(fun('palabra', 'diferente')).to.be.false;
  });

  it('Test case 4', () => {
    expect(fun('barco', 'cobra')).to.be.true;
  });

  it('Test case 5', () => {
    expect(fun('directo', 'cerdito')).to.be.true;
  });

  it('Test case 6', () => {
    expect(fun('perro', 'orreo')).to.be.false;
  });
});
