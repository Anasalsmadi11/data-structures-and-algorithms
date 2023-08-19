function mergeSort(arr) {
    const n = arr.length;

    if (n > 1) {
        const mid = Math.floor(n / 2);
      // console.log("mid", mid)
        const left = arr.slice(0, mid);
      // console.log("left", left)
        const right = arr.slice(mid);

        mergeSort(left);
        mergeSort(right);
        merge(left, right, arr);
    }
}

function merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }
}


const array = [12, 11, 13, 5, 6, 7];
mergeSort(array);
console.log("Sorted array:", array);

module.exports= mergeSort