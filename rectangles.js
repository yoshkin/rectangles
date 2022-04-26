// @ts-check
// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from '@hexlet/points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';

// BEGIN (write your solution here)
export const makeRectangle = (point, width, heigth) => cons(point, cons(width, heigth));

export const getStartPoint = (rect) => car(rect);
export const getWidth = (rect) => car(cdr(rect));
export const getHeight = (rect) => cdr(cdr(rect));

export const square = (rect) => getWidth(rect) * getHeight(rect);
export const perimeter = (rect) => (getWidth(rect) + getHeight(rect)) * 2;
export const containsTheOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makePoint(getX(point1) + getWidth(rectangle), getY(point1) - getHeight(rectangle));

  return quadrant(point1) === 2 && quadrant(point2) === 4;
};
// END
