function mergeSort(arr){
  
  if (arr.length < 2){
    return arr;
  }

  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, length);

  // helper function;
  function merge(left, right){

    let result = [];

    while (left.length && right.length){
      if (left[0] <= right[0]){
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length){
      result.push(left.shift());
    }

    while (right.length){
      result.push(right.shift());
    }

    return result;
  }

  return merge(mergeSort(left), mergeSort(right));
}