import {expect} from 'chai';
import fun from '../src/04-primos';

describe('04 primos', () => {
  let serie: number[] = [];

  beforeEach(() => {
    serie = fun();
  });

  it('Test case 1', () => {
    expect(serie.length).to.eq(25);
  });

  it('Test case 2', () => {
    const firstTen = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

    expect(serie).to.include.members(firstTen);
  });

  it('Test case 3', () => {
    const all = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ];

    expect(serie).to.have.members(all);
  });
});
