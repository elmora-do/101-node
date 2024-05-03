import {expect} from 'chai';
import fun from '../src/05-area';

describe('05 area', () => {
  it('Test case 1', () => {
    const areas = fun([2, 2]);

    expect(areas[0]).to.eq(2);
    expect(areas[1]).to.eq(4);
    expect(areas[2]).to.eq(4);
  });

  it('Test case 2', () => {
    const areas = fun([5.8, 4.2]);

    expect(areas[0]).to.eq(12.18);
    expect(areas[1]).to.eq(24.36);
    expect(areas[2]).to.eq(24.36);
  });

  it('Test case 3', () => {
    const areas = fun([0, 20]);

    expect(areas[0]).to.eq(0);
    expect(areas[1]).to.eq(0);
    expect(areas[2]).to.eq(0);
  });
});
