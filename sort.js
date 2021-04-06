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
// PSEUDOCODE from https://en.wikipedia.org/wiki/Merge_sort#Top-down_implementation_using_lists
const merge = (data) => {
  console.log('_______MERGE SORTING_______');

  /*  */
  /* method to run 2nd, AFTER the recursive splitting down to 1 item sub lists */
  /*  */
  const mergeHalves = (leftHalf, rightHalf) => {
    console.log('***MERGING', leftHalf, rightHalf);

    // array to be filled merged items
    let mergedArray = [];

    // keep looping while both arrays still have items
    while (leftHalf.length && rightHalf.length) {
      console.log('LEFT HALF', leftHalf, 'RIGHT HALF', rightHalf);
      console.log('LEFT ', leftHalf[0], 'RIGHT', rightHalf[0]);

      // compare first items of both halves, remove the smaller one and place in the merged array
      if (leftHalf[0] <= rightHalf[0]) {
        console.log('LEFT IS SMALLER');
        mergedArray.push(leftHalf.shift());
      } else {
        console.log('RIGHT IS SMALLER');
        mergedArray.push(rightHalf.shift());
      }
    }

    // if the two halves were uneven, merge in the remaining items from the longer half
    while (leftHalf.length) {
      console.log('REMAING ITEMS IN LEFT HALF', leftHalf);
      mergedArray.push(leftHalf.shift());
    }
    while (rightHalf.length) {
      console.log('REMAING ITEMS IN right HALF', rightHalf);
      mergedArray.push(rightHalf.shift());
    }

    return mergedArray;
  };

  /*  */
  /* recursively break apart until they are 1 item sublists */
  /*  */
  const recursiveSort = (data) => {
    console.log('current sub-array:', data);
    if (data.length <= 1) {
      //   if (data === undefined || data.length <= 1) {
      console.log('sublist has 1 or 0 items');
      return data;
    }
    // find the middle or just left of middle if even number of elements
    let middleIndex = Math.floor(data.length / 2);
    console.log('middle index:', middleIndex);

    // recursive call on first half (slice has an exclusive ending index)
    let leftHalf = recursiveSort(data.slice(0, middleIndex));

    // recursive call on second half
    let rightHalf = recursiveSort(data.slice(middleIndex));

    // merge sorted left and rights
    let merged = mergeHalves(leftHalf, rightHalf);
    return merged;
  };

  // initial call or recursive fn
  return recursiveSort(data);
};

// EXPORTS for use in other files
exports.bubble = bubble;
exports.merge = merge;
