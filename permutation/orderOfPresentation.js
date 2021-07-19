
function orderOfPresentation(N, K) {
  // N까지의 배열 생성
  const arr = Array.from({ length: N }, (v, i) => i + 1);
  
  let set = new Set();

  const numOfCase = (arr, str) => {
    if (arr.length) {
      for (let i = 0; i < arr.length; i++) {
        let copy = [...arr];
        copy.splice(i, 1);
        numOfCase(copy, str + arr[i]);
      }
    }
    if (str > 0) set.add(Number(str));
  }
  numOfCase(arr, "");
  
  let all_case = Array.from(set).filter( el => String(el).length === 3);
  // 모든 경우의 수에 담긴 배열과 인자 K를 비교하여 같은 경우 그 인덱스를 반환.
  return all_case.indexOf(Number(K.join('')));
}
let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output);