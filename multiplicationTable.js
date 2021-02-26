const multiplicationTable = function(maxValue) {
  // Your code here
  let number =""
  for (i = 1; i <= maxValue; i++){
    for (j = 1; j <= maxValue; j++){
      j == maxValue? number += i*j + "\n" : number += i*j +" "
}
  }
  
return number};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));