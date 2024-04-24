import fun from '../src/01-fizz-buzz';
import {expect} from 'chai';

describe('01 Fizz Buzz', () => {
  let output: (number | string)[];

  before(() => {
    output = fun();
  });

  it('test case 1', () => {
    expect(output[0]).to.equal(1);
    expect(output[1]).to.equal(2);
    expect(output[2]).to.equal('fizz');
    expect(output[3]).to.equal(4);
    expect(output[4]).to.equal('buzz');
    expect(output[14]).to.equal('fizzbuzz');
  });
});
