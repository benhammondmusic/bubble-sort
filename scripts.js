// attempt at implementing a bubble sort in JS

let data = [1, 3, 5, 6, 3, 435, 3, 123, 3, 5, 3, 4, 66, 55, 44, 33, 2, 5, 6, 777, 6, 5, 4, 345, 23, 2, 5, 64, 300];

console.log('UNSORTED DATA', data);

// boolean to keep track if a swap was needed. if not, the array is finally sorted
let didSwap = true;

// keep looping the bubbling swaps until an entire pass thru the array with no swaps needed
while (didSwap) {
  console.log('CURRENT STATE OF ARRAY', data);

  // reset flag on each new bubble pass
  didSwap = false;

  // iterate inner loop over array, avoiding out of range errors
  for (let i = 1; i < data.length; i++) {
    let a = data[i - 1];
    let b = data[i];
    console.log('comparing: ', a, b);

    // swap pair if they're not in order
    // send "didSwap" flag to outer loop
    if (a > b) {
      data[i - 1] = b;
      data[i] = a;
      console.log('swapped and put back: ', b, a);
      didSwap = true;
    }
  }
}

console.log('YAY! SORTED ARRAY! ', data);
