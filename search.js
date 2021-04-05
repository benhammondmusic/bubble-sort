// I chose to implement this binary search with iteration rather than recursion. Mainly because it's a little easier to understand the flow, but also seemed easier to implement moving the pointers to restrict the search by half each round, rather than sending a slice of the array into a recursive call. Dealing with slice and array data is a lot more memory intensive than simply adjusting parameters in the while loop, and accomplishes the same purpose

const binary = (searchItem, sortedArray) => {
  // start with the entire array
  let startIdx = 0;
  let endIdx = sortedArray.length - 1;

  // loop until you pinpoint a single item (or find a match below)
  while (startIdx <= endIdx) {
    // console.log(`start ${startIdx} end ${endIdx}`);
    // console.log(`Finding ${searchItem} in ${sortedArray.slice(startIdx, endIdx + 1)} using iterative binary search `);

    // find the center slot
    let middleIdx = Math.floor((endIdx + startIdx) / 2);
    let centerItem = sortedArray[middleIdx];

    // console.log(`center value ${centerItem} at position ${middleIdx}`);

    // if that's your search item then great! return that index
    // otherwise restrict your search to the remaining half the smaller or larger than the middle point
    if (sortedArray[middleIdx] === searchItem) return middleIdx;
    else if (searchItem < centerItem) {
      endIdx = middleIdx - 1;
    } else if (searchItem > centerItem) {
      startIdx = middleIdx + 1;
    }
  }
  // if program exits the while loop and gets here, that means the search got to the location that should have held the searchItem
  // return -1 to indicate value isn't present in array
  return -1;
};

exports.binary = binary;
