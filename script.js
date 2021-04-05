// import my custom sort and search function collections
const sort = require('./sort');
const search = require('./search');

// returns an array of random positive ints. set num of array items and max possible value of each
const makeRandomIntArray = (length, max) => {
  let array = [];
  while (array.length < length) {
    array.push(Math.floor(Math.random() * max));
  }
  return array;
};

// get some random data: an array of arg1 ints, max possible value of arg2
let data = makeRandomIntArray(100, 100);
console.log('SOME RANDOM DATA:', data);

// bubble sort it
data = sort.bubble(data);
console.log('BUBBLE SORTED', data);

let item;
let foundIndex;

// find index of number
item = 50;
foundIndex = search.binary(item, data);
console.log('Using iterative binary search...');
console.log('Found ', item, 'in', data, 'at position', foundIndex);
if (foundIndex < 0) console.log('ITEM NOT FOUND');
