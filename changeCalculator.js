const calculateChange = function(total, cash) {
  // Your code here
  let change = cash - total;
  let changes ={}
  let number = 0;

  let changeType = ["twentyDollar", "tenDollar","fiveDollar","twoDollar","oneDollar","quarter","dime","nickel","penny"]
  let changeValue= [2000,1000,500,200,100,25,10,5,1]

  for (i=0;i<changeValue.length;i++){

    number = Math.floor(change/changeValue[i])

    if (number !=0){
      changes[changeType[i]] = number
    }
    change = change - number * changeValue[i]
  }

  return changes
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
