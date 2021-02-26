const sumLargestNumbers = function(data) {
  // Put your solution here
  let sum =0;
  let max=0;
  let max2=0;
 
  if (data.length <2){
    console.log("array too short")
  }
  else if (data.length ==2){
    sum = data[0]+data[1]
  }
  else {
    max = data.reduce((big,small) => {return big > small ? big:small})
    data.splice(data.indexOf(max),1)
    max2 = data.reduce((big,small) => {return big > small ? big:small})
    sum = max +max2
  }
  return sum
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log("make some changes")