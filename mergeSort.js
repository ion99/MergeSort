const mergeSort = arr => {
  
  if (arr.length < 2){
    return arr;
  }

  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, length);

  // helper function;
  const merge = (left, right) => {

    let results = [];

    while (left.length && right.length){
      left[0] <= right[0] ? results.push(left.shift()) : results.push(right.shift());
    }

    while (left.length){
      results.push(left.shift());
    }

    while (right.length){
      results.push(right.shift());
    }

    return results;
  }

  return merge(mergeSort(left), mergeSort(right));
}
