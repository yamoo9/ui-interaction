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
PI = 100;

console.log('changed? PI:', PI);
