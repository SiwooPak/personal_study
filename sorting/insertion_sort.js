
const insertion_sort = (arr, n) => {
 let tmp = 0; 
 for(let i=1; i<n; i++) {
      for(let j=i;j>0;j--) {
          if(arr[j-1] > arr[j]) {
              tmp = arr[j];
              arr[j] = arr[j-1];
              arr[j-1] = tmp;
            }
        }
    }
  return arr;
}

let arr = [5,3,4,2,1];
document.write("정렬 전의 배열: ", arr, "<br/>")
insertion_sort(arr, 5);
document.write("정렬 후의 배열: ", arr, "<br/>")

