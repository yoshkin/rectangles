// @ts-check
import { makePoint, toString as pointToString } from '@hexlet/points';

import {
  makeRectangle,
  getStartPoint,
  getWidth,
  getHeight,
  square,
  perimeter,
  containsTheOrigin,
} from '../rectangles.js';

describe('Rectangle', () => {
  const rectangle = makeRectangle(makePoint(0, 1), 5, 4);

  it('selectors', () => {
    expect(pointToString(getStartPoint(rectangle))).toBe('(0, 1)');
    expect(getWidth(rectangle)).toBe(5);
    expect(getHeight(rectangle)).toBe(4);
  });

  it('square', () => {
    expect(square(rectangle)).toBe(20);
  });

  it('perimeter', () => {
    expect(perimeter(rectangle)).toBe(18);
  });

  it('containsTheOrigin', () => {
    expect(containsTheOrigin(rectangle)).toBe(false);

    expect(containsTheOrigin(makeRectangle(makePoint(-4, 3), 5, 4))).toBe(true);
    expect(containsTheOrigin(makeRectangle(makePoint(-4, 4), 5, 2))).toBe(false);
    expect(containsTheOrigin(makeRectangle(makePoint(-4, 3), 2, 8))).toBe(false);
    expect(containsTheOrigin(makeRectangle(makePoint(1, -1), 2, 2))).toBe(false);
  });
});
