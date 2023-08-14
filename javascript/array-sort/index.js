function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min]) {
          // console.log("min", arr[min])
          min = j;
          // console.log("j", arr[j])
        }
      }
  
      const temp = arr[min];
      console.log("temp", temp)
      arr[min] = arr[i];
      console.log("arr[min]",arr[min])
      arr[i] = temp;
      console.log("arr[i]",arr[i])
    }
  }
  

  const arrayToSort = [64, 25, 12, 22, 11];
  selectionSort(arrayToSort);
  console.log("Sorted array:", arrayToSort);
  