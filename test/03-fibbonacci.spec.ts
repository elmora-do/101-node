import {expect} from 'chai';
import fun from '../src/03-fibbonacci';

describe('03 Fibbonacci', () => {
  it('Test case 1', () => {
    const serie = fun();

    expect(serie.length).to.be.eq(50);
  });

  it('Test case 2', () => {
    const serie = fun();

    const firstTen = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(serie).to.include.members(firstTen);
  });

  it('Test case 3', () => {
    const serie = fun();

    const lastTen = [
      102334155, 165580141, 267914296, 433494437, 701408733, 1134903170,
      1836311903, 2971215073, 4807526976, 7778742049,
    ];
    expect(serie).to.include.members(lastTen);
  });

  it('Test case 4', () => {
    const serie = fun();

    expect(serie[9]).to.eq(34);
    expect(serie[19]).to.eq(4181);
    expect(serie[29]).to.eq(514229);
    expect(serie[39]).to.eq(63245986);
    expect(serie[49]).to.eq(7778742049);
  });
});
