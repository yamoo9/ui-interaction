// import { drink } from './1-var-const.js';
// drink('water');

import { getRandomCount, calcRandomCount } from './utils/getRandomCount.js';

let randomCount1 = getRandomCount(30, 60);
let randomCount2 = calcRandomCount(20, 160);

console.log('randomCount1:', randomCount1);
console.log('randomCount2:', randomCount2);
