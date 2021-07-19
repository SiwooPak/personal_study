const getPermutations = function (num, arr) {
  const results = [];
  if (num === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(num - 1, rest); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};
function orderOfPresentation(N, K) {
  // N까지의 배열 생성
  const arr = Array.from({ length: N }, (v, i) => i + 1);
  // 그 배열의 모든 경우의 수를 순열을 이용하여 구하고
  const res = getPermutations(N, arr);
  // 모든 경우의 수에 담긴 배열과 인자 K를 비교하여 같은 경우 그 인덱스를 반환.
  for (let i = 0; i < res.length; i++) {
    if (K.toString() === res[i].toString()) return i;
  }
}

let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output);
output = orderOfPresentation(5, [1, 3, 2, 4, 5]);
console.log(output);
