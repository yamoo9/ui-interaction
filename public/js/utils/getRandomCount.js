// ECMAScript 2015(6) - 2022(13)
// Arrow Function Expression
export const getRandomCount = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export function calcRandomCount(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
