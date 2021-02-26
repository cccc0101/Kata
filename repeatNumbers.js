const repeatNumbers = function(data) {
  // Put your solution here
  return data.map(([char,repeats]) => String(char).repeat(repeats)).join(', ');
  };

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));