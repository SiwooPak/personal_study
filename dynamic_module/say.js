export function hi() {
  alert('안녕하세요!');
}

export function bye() {
  alert('안녕히 가세요!');
}

export default function() {
  alert('export default한 모듈을 불러왔습니다.');
}
// 아래와 같이 코드를 작성하면 모듈을 동적으로 불러올 수 있음
// let {hi, bye} = await import('./say.js');
// hi();
// bye();

// default function을 사용할려면
// let obj = await import('./say.js');
// let say = obj.default;
// 위의 두줄을 한줄로 표현하면
// let {default: say} = await import('./say.js');

// say();
