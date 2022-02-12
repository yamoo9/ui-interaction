// 변수(variable)
// var → let으로 정의
let bread = '오븐에 구운 도넛';
console.log('bread:', bread);

// 변수는 런타임(실행) 중에도 변경할 수 있다.
bread = '오븐에 빠진 닭';
console.log('changed bread:', bread);

// 상수(constant)
// const로 정의
const PI = 3.14592;
console.log('PI:', PI);

// 상수는 런타임(실행) 중에 변경할 수 없다.
// PI = 100;

console.log('changed? PI:', PI);

console.log(
  '--------------------------------------------------------------------------'
);

// JavaScript : Data Types

// undefined
let isNotUndefined; // undefined
console.log(isNotUndefined);
// null
let supportFeature = null;
console.log(supportFeature);
// number
let oneOone = 101;
console.log(oneOone);
// string
let greetMessage = 'hi everyone';
console.log(greetMessage);
// boolean
let isVisible = false;
console.log(isVisible);
// symbol
let checkType = Symbol('checktype');
console.log(checkType);

// object
const donut = {
  material: '밀가루',
  shape: '동그라미',
};
console.log(donut);
// array
const members = ['현식', '상미', '바름'];
console.log(members);
// function
export const drink = (what) => console.log('drink' + what);
console.log(drink);
