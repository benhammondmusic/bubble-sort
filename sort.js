// implementation of a bubble sort in JS
const bubble = (data) => {
  // boolean to keep track if a swap was needed. if not, the array is finally sorted
  let didSwap = true;

  // keep looping the bubbling swaps until an entire pass thru the array with no swaps needed
  while (didSwap) {
    // reset flag on each new bubble pass
    didSwap = false;

    // iterate inner loop over array, avoiding out of range errors
    for (let i = 1; i < data.length; i++) {
      let a = data[i - 1];
      let b = data[i];

      // swap pair if they're not in order
      // send "didSwap" flag to outer loop
      if (a > b) {
        data[i - 1] = b;
        data[i] = a;
        didSwap = true;
      }
    }
  }

  return data;
};

// merge sort implementation
const merge = (data) => {
  console.log('_______MERGE SORTING_______');

  const mergeHalves = (leftHalf, rightHalf) => {
    // ! need to implement actual merge
    console.log('***MERGING', leftHalf, rightHalf);
    return [...leftHalf, ...rightHalf];
  };

  const recursiveSort = (data) => {
    console.log('current sub-array:', data);
    if (data.length <= 1) {
      //   if (data === undefined || data.length <= 1) {
      console.log('sublist has 1 or 0 items');
      return data;
    }
    let middleIndex = Math.floor(data.length / 2);
    console.log('middle index:', middleIndex);

    // recursive call on first half
    let leftHalf = recursiveSort(data.slice(0, middleIndex));

    // recursive call on second half
    let rightHalf = recursiveSort(data.slice(middleIndex));

    // merge sorted left and rights
    let merged = mergeHalves(leftHalf, rightHalf);

    return merged;
  };

  return recursiveSort(data);
};

exports.bubble = bubble;
exports.merge = merge;
