function getDirections(matrix, from, to) {
  // TODO: 여기에 코드를 작성합니다.
  //인접행렬 길찾기;

  //길을 하나 만들건데,, 방문했는지에 길입니다.
  let path = new Array(matrix.length).fill(false);
  // path = [false, false, false, false ]

  let location = [from]; // [0] 길이는 1;
  path[from] = true;
  // [true, false, false, false ]

  while (location.length > 0) {
    //길이가 0이 될때까지
    // 현재위치의 변수
    let now = location.shift(); // 2
    //base case
    if (now === to) return true; //to = 2

    for (let i = 0; i < matrix.length; i++) {
      // 두가지 조건이 설입되어야한다.
      // 1번 path[i] ===false이고 2번 matrix[now][i] === 1
      if (matrix[now][i] === 1 && !path[i]) {
        path[i] === true;
        location.push(i);
      }
    }
  }
  return false;
}
