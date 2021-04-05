const sort = require('./sort');
const search = require('./search');

let data = [1, 3, 5, 6, 3, 435, 3, 123, 3, 5, 3, 4, 66, 55, 44, 33, 2, 5, 6, 777, 6, 5, 4, 345, 23, 2, 5, 64, 300];

data = sort.bubble(data);

search.binary(2, data);
