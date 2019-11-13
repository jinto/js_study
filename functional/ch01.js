// 유인동님 강의 들으면서 정리.
const log = console.log

// 함수를 인자로 받아서, 그 함수를 호출해주는 함수.
function fcall_with_1(f) { 
  return f(1); 
}

function fadd2(a) { 
  return a + 2; 
}

log(fcall_with_1(fadd2));


// 화살표 문법으로 바꾸면

const call_with_1 = f => f(1);
const add2 = a => a + 2;

log(call_with_1(add2));


// 화살표 문법으로 바꾸면
log(call_with_1(a => a+2));
log(call_with_1(a => a-2));


// 또 다른 예
const times = (f, n) => {
  for(let i = 0; i < n; i++) {
    f(i)
  }
}

times(log, 3);
times(a => log(a + 10), 3);


// 함수를 만드는 함수
const addMaker = a => b => a + b;
// 여기서 만들어지는 건 b => a + b 라는 함수인데.
// 클로저, 즉, 주어진 a 를 기억하는 놈이다.

const add10 = addMaker(10);
// 그래서 얘는 만들어질때 주어진 a 즉 10 을 기억하고 있어서
// b => 10 + b 인 함수가 된다.

log(add10);
log(add10(10));

// 클로저는 생성될때의 컨텍스트를 기억하는 함수이다.
