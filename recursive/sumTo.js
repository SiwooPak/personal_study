// 재귀함수 1
// 수(num)를 입력받아 1부터 num까지의 합을 리턴해야 합니다.
function sumTo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 별도의 최적화 기법(memoization)은 금지됩니다.
  // sumTo(1) = 1
  // sumTo(2) = 2 + 1 = 3
  // sumTo(3) = 3 + 2 + 1 = 6
  // sumTo(n) = n + sumTo(n-1)
  // 1이하의 값들은 자기 자신이 값이 된다.
  if (num <= 1) return num;
  return num + sumTo(num - 1);
}
