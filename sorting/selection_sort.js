const selection_sort = (arr) => {
    
    for(let i=0; i<arr.length-1; i++) { // 앞의 인덱스
        let index_min = i;
        for(let j=i+1; j<arr.length; j++) { //뒤의 인덱스
            if(arr[j]< arr[index_min]) { //뒤의 인덱스 요소가 더 작을 경우
                index_min=j; //index_min에 뒤의 인덱스 할당
            }
        }
        let temp = arr[index_min]; // 임시 변수에 최소값 할당
        arr[index_min] = arr[i]; // 앞의 인덱스 최솟값의 인덱스였던 자리로 할당
        arr[i] = temp; // 앞의 인덱스 최소값 할당
    }
    
    return arr;
}

console.log(selection_sort([1,5,2,7,9]));