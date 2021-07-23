// 코드 수정중
function connectedVertices(edges) {
    // TODO: 여기에 코드를 작성합니다.
    // 정점의 길이 구하기
    const maxVertex = Math.max(...new Set(edges.flat()));
    // 그 길이만큼의 배열 생성
    const matrix = Array.from(Array(maxVertex+1),() => Array(maxVertex+1).fill(0));
    
    // 생성된 배열에 간선추가
    edges.forEach(([x,y]) => {
      matrix[x][y] = 1;
      matrix[y][x] = 1;
    });
    //console.table(matrix);
    
    let isVisited = new Array(maxVertex+1).fill(0);
    let cnt = 0;
    
    // 정점 순회
    for(let v=0; v<maxVertex; v++) {
      if(!isVisited[v]) {
        dfs(matrix, v, isVisited);
        isVisited = new Array(maxVertex+1).fill(false);
        cnt++;
      }
    }
    console.log(isVisited)
    return cnt;
  }
  
  function dfs(matrix, v, isVisited) {
    isVisited[v] = true; // 먼저 해당 vertex를 체크한다. 
    for (let i = 0; i < matrix[v].length; i++) {
      if (matrix[v][i]===1 && !isVisited[i]) {
        dfs(matrix, matrix[v][i], isVisited);
      } 
    }
  }