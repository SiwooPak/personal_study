// 이중 선택 정렬은 한번의 루틴에서 최솟값과 최댓값을 같이 찾는 방식으로 정렬하는 선택정렬의 한 방식.
function doubleSelectionSort(arr, a, b) {
    let start = a;
    let end = b;

    while(start<end) {
        let min = start;
        let max = end;

        for(let i=0; i<arr.length; i++) {
            if(arr[i] < arr[min]) min = i;
            if(arr[i] > arr[max]) max = i;
            
            let temp = null;
            temp = arr[start];
            arr[start] = arr[min];
            arr[min] = temp;

            temp = arr[end];
            arr[end] = arr[max];
            arr[max] = temp;

            start++;
            end--;
        }
    }
    return arr;
}